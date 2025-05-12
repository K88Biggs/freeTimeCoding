import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly errorTooltip: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#username');
    this.continueButton = page.locator('[data-action-button-primary="true"]');
    this.errorTooltip = page.locator('text=Enter a valid email');
  }

  async goto() {
    await this.page.goto('https://identity.hudl.com');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async submit() {
    await this.continueButton.click();
  }
}
