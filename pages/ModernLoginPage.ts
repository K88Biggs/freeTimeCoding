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
    this.emailInput = page.locator('input[type="email"]');
    this.continueButton = page.locator('button:has-text("Continue")');
    this.googleButton = page.locator('button:has-text("Continue with Google")');
    this.facebookButton = page.locator('button:has-text("Continue with Facebook")');
    this.appleButton = page.locator('button:has-text("Continue with Apple")');
    this.createAccountLink = page.locator('text=Create Account');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }
}
