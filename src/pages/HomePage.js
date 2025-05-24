import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText("Your Feed");
  }

  async testFuch() {}

  async assertYourFeedTabIsVisible() {
    await expect(this.yourFeedTab).toBeVisible();
  }
}
