import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Sign in positive tests', () => {
  let signInPage;
  let homePage;
  let user;

  test.beforeEach(async ({ page, request }) => {
    signInPage = new SignInPage(page);
    homePage = new HomePage(page);

    const userId = faker.string.uuid();
    user = {
      username: `user_${userId}`,
      email: `user_${userId}@example.com`,
      password: 'newpass123!',
    };

    const response = await request.post('/api/users', {
      data: { user },
    });

    expect(response.ok()).toBeTruthy();
  });

  test('Successful `Sign in` flow test', async () => {
    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();

    await homePage.assertYourFeedTabIsVisible();
  });
});
