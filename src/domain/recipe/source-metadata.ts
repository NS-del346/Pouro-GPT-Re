export type RecipeSourceType =
  'primary' | 'secondary' | 'owner_supplied' | 'home_adaptation' | 'unresolved';

export type SourceConfidence = 'confirmed' | 'supported' | 'experimental' | 'unresolved';

export interface RecipeSourceMetadata {
  sourceType: RecipeSourceType;
  confidence: SourceConfidence;
  person?: string;
  competition?: string;
  brand?: string;
  sourceUrl?: string;
  unresolvedPoints: readonly string[];
}
