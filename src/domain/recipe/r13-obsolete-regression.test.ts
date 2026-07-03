/// <reference types="node" />

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const REPOSITORY_ROOT = dirname(dirname(dirname(dirname(fileURLToPath(import.meta.url)))));
const SOURCE_ROOT = join(REPOSITORY_ROOT, 'src');

const CANONICAL_R13_SEQUENCE = [50, 70, 30, 90, 60] as const;

// OBSOLETE / NEGATIVE_REGRESSION_FIXTURE: must never appear in production source.
const OBSOLETE_R13_SEQUENCE_NEGATIVE_REGRESSION_FIXTURE = [50, 70, 60, 60, 60] as const;

const PRODUCTION_SOURCE_EXTENSION = /\.(?:ts|tsx)$/;
const TEST_SOURCE_EXTENSION = /\.test\.(?:ts|tsx)$/;
const NUMBER_UNIT_PATTERN = String.raw`(?:\s*(?:g|grams?))?`;
const R13_CONTEXT_PATTERN = /\b(?:r-?13|winton|drawdown\s*five)\b/i;

function walkProductionSourceFiles(directory: string): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  const entries = readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    const relativePath = relative(SOURCE_ROOT, fullPath).replaceAll('\\', '/');

    if (entry.isDirectory()) {
      if (relativePath === 'test' || relativePath.startsWith('test/')) {
        continue;
      }

      files.push(...walkProductionSourceFiles(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      PRODUCTION_SOURCE_EXTENSION.test(entry.name) &&
      !TEST_SOURCE_EXTENSION.test(entry.name)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function sequencePattern(sequence: readonly number[], separator: string): RegExp {
  const values = sequence.map((value) => String.raw`${value}(?:\.0)?${NUMBER_UNIT_PATTERN}`);

  return new RegExp(values.join(separator), 'i');
}

function arraySequencePattern(sequence: readonly number[]): RegExp {
  return sequencePattern(sequence, String.raw`\s*,\s*`);
}

function slashSeparatedSequencePattern(sequence: readonly number[]): RegExp {
  return sequencePattern(sequence, String.raw`\s*\/\s*`);
}

function commaSeparatedTextSequencePattern(sequence: readonly number[]): RegExp {
  return sequencePattern(sequence, String.raw`\s*,\s*`);
}

function isR13ScopedOccurrence(source: string, matchIndex: number): boolean {
  const contextStart = Math.max(0, matchIndex - 300);
  const contextEnd = Math.min(source.length, matchIndex + 300);
  const context = source.slice(contextStart, contextEnd);

  return R13_CONTEXT_PATTERN.test(context);
}

function findObsoleteSequenceViolations(): string[] {
  const patterns = [
    arraySequencePattern(OBSOLETE_R13_SEQUENCE_NEGATIVE_REGRESSION_FIXTURE),
    slashSeparatedSequencePattern(OBSOLETE_R13_SEQUENCE_NEGATIVE_REGRESSION_FIXTURE),
    commaSeparatedTextSequencePattern(OBSOLETE_R13_SEQUENCE_NEGATIVE_REGRESSION_FIXTURE),
  ];

  return walkProductionSourceFiles(SOURCE_ROOT).flatMap((filePath) => {
    if (!statSync(filePath).isFile()) {
      return [];
    }

    const source = readFileSync(filePath, 'utf8');
    const matched = patterns.some((pattern) => {
      const match = pattern.exec(source);

      return match ? isR13ScopedOccurrence(source, match.index) : false;
    });

    return matched ? [relative(REPOSITORY_ROOT, filePath).replaceAll('\\', '/')] : [];
  });
}

describe('R-13 obsolete sequence regression guard', () => {
  it('keeps canonical and obsolete R-13 sequences distinct', () => {
    expect(CANONICAL_R13_SEQUENCE).not.toEqual(OBSOLETE_R13_SEQUENCE_NEGATIVE_REGRESSION_FIXTURE);
  });

  it('does not allow the obsolete R-13 sequence in production source', () => {
    expect(findObsoleteSequenceViolations()).toEqual([]);
  });

  it('does not treat the same sequence as obsolete outside R-13 context', () => {
    const fourSixContext = 'four-six sweeter stronger generated sequence: 50 / 70 / 60 / 60 / 60 g';

    expect(isR13ScopedOccurrence(fourSixContext, fourSixContext.indexOf('50'))).toBe(false);
  });
});
