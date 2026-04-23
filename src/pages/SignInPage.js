export class SignInPage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/login');
  }
}