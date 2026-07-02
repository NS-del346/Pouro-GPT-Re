import { expect, test } from '@playwright/test';

test('loads the bootstrap application from production preview', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');

  await expect(page).toHaveTitle('Pourō-GPT Re');
  await expect(page.getByRole('heading', { name: 'Pourō-GPT Re' })).toBeVisible();
  await expect(page.locator('#root')).not.toBeEmpty();
  await expect(page.getByText(/count is/i)).toHaveCount(0);
  await expect(page.getByRole('link', { name: /vite/i })).toHaveCount(0);
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});
