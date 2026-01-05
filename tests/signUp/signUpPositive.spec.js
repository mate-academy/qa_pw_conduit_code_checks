import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Sign up positive tests', () => {
  let homePage;
  let user;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);

    user = {
      username: `test_user_${Math.floor(Math.random() * 10000)}`,
      email: `test_user_${Math.floor(Math.random() * 10000)}@test.com`,
      password: `test_user_${Math.floor(Math.random() * 10000)}`,
    };
  });

  test('Successful `Sign up` flow test', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    await signUpPage.open();
    await signUpPage.fillUsernameField(user.username);
    await signUpPage.fillEmailField(user.email);
    await signUpPage.fillPasswordField(user.password);
    await signUpPage.clickSignUpButton();

    await homePage.assertYourFeedTabIsVisible();
  });
});
