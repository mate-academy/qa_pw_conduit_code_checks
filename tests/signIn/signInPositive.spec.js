import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';

test.describe('Sign in positive tests', () => {
  let signInPage;
  let user;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);

    user = {
      email: 'test_new_user@gmail.com',
      password: 'newpass123!',
    };
  });

  test('Successful `Sign in` flow test', async () => {
    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();

    await signInPage.page.waitForLoadState('networkidle');

    console.log(await signInPage.page.locator('body').innerText());
  });
});
