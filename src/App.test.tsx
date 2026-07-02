import { render, screen } from '@testing-library/react';
import type { MockInstance } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';

describe('App bootstrap', () => {
  let consoleErrorSpy: MockInstance<typeof console.error>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders the application bootstrap shell without default Vite sample UI', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pourō-GPT Re' })).toBeInTheDocument();
    expect(screen.getByText('React TypeScript foundation is mounted.')).toBeInTheDocument();
    expect(screen.queryByText(/count is/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /vite/i })).not.toBeInTheDocument();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
