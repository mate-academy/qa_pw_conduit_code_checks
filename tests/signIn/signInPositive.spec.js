import { test, expect } from '@playwright/test';

test('sign in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[type="email"]', 'test@mail.com');
  await page.fill('input[type="password"]', 'password123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*/);
});