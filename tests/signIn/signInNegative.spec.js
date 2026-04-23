import { test, expect } from '@playwright/test';

test('sign in invalid', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[type="email"]', 'wrong@mail.com');
  await page.fill('input[type="password"]', 'wrong');

  await page.click('button[type="submit"]');

  await expect(page.locator('.error-messages')).toBeVisible();
});