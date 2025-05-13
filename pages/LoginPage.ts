import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly browserName: string;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly googleButton: Locator;
  readonly passwordInput: Locator; 
  readonly usernameErrorMessage: Locator; // Locator for the parent error message element
  readonly inputField: Locator;

  constructor(page: Page, browserName: string) {
    this.page = page;
    this.browserName = browserName;
    this.emailInput = page.locator('#username');
    this.continueButton = page.locator('[data-action-button-primary="true"]');
    this.googleButton = page.locator('[data-provider="google"]');
    this.facebookButton = page.locator('[data-provider="facebook"]');
    this.appleButton = page.locator('[data-provider="apple"]');
    this.passwordInput = page.locator('#password');
    this.usernameErrorIcon = page.locator('span.ulp-input-error-icon'); // Defining the locator
    this.usernameErrorMessage = page.locator('#error-element-username'); // Using the ID of the parent
    this.inputField = page.locator('input.hide');
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
async snapshot(label: string) {
    await percySnapshot(this.page, `${label} - ${this.browserName}`);
  }
async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.continueButton.click();
  }
async validateFieldIsHidden(page: Page) {
  // Check if the element is not visible based on computed styles
  await expect(inputField).not.toBeVisible();
}
 async enterPassword(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toBeEnabled();
}
}
