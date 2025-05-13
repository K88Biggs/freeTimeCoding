import { Page, Locator } from '@playwright/test';

export class ModernLoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly googleButton: Locator;
  readonly facebookButton: Locator;
  readonly appleButton: Locator;
  readonly createAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('xpath=//*[@id="username"]');
    this.continueButton = page.locator('button[data-action-button-primary="true"]');
    this.googleButton = page.getByRole(button, {name: 'Continue with Google'});
    this.facebookButton = page.getByRole(button, {name: 'Continue with Facebook'}));
    this.appleButton = page.getByRole(button, {name: 'Continue with Apple'});
    this.createAccountLink = page.locator('xpath=//a[contains(text), Create Account');
  }

  async goto() {
    await this.page.goto('./login/.');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }
}
