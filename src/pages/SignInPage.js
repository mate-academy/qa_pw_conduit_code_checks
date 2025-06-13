import { expect } from '@playwright/test';

export class SignInPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.locator('.error-messages');
  }

  async open() {
    await this.page.goto('/user/login');
  }

  async fillEmailField(email) {
    await this.emailField.fill(email);
  }

  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async assertErrorMessageContainsText(messageText) {
    await expect(this.errorMessage).toContainText(messageText);
  }
}
