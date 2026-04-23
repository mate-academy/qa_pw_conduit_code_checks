import { test, expect } from '@playwright/test';

test('sign up with valid data', async ({ page }) => {
  await page.goto('/register');

  await page.fill('input[placeholder="Username"]', 'testuser123');
  await page.fill('input[type="email"]', 'testuser123@mail.com');
  await page.fill('input[type="password"]', 'Password123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*\/$/);
});