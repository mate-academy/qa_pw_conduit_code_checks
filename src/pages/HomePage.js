import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByRole('link', { name: 'Your Feed' });
  }

  async assertYourFeedTabIsVisible() {
    await expect(this.yourFeedTab).toBeVisible();
  }
}
