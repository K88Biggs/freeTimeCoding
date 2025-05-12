import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly usernameErrorMessage: Locator; // Locator for the parent error message element

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#username');
    this.continueButton = page.locator('[data-action-button-primary="true"]');
    this.usernameErrorIcon = page.locator('span.ulp-input-error-icon'); // Defining the locator
    this.usernameErrorMessage = page.locator('#error-element-username'); // Using the ID of the parent
  }

  async goto() {
    await this.page.goto('https://identity.hudl.com/u/login/identifier?state=hKFo2SBDSDVmQmNIaThZc2lKZWFhVGFUa3F4ZS10TFM0WVFBQaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEF4YXRzc1h5MHNjVFNtY2pQSGNWLW1sY1BkNHhaTXpko2NpZNkgbjEzUmZrSHpLb3phTnhXQzVkWlFvYmVXR2Y0V2pTbjU');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

async attemptLoginWithEmptyUsername() {
    // Assuming there's a login button or action to trigger validation
    // You would replace this with the actual action that triggers the error
    // For example, clicking a submit button or blurring the input after entering invalid data.
    await this.usernameInput.blur(); // Triggering validation on blur is common
    // Or if there's a submit button:
    // await this.page.locator('button[type="submit"]').click();
  }

  async submit() {
    await this.continueButton.click();
  }

  async isUsernameErrorIconVisible() {
    return await this.usernameErrorIcon.isVisible();
  }
}
