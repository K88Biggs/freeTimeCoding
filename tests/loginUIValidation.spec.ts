import { test, expect } from '@playwright/test';
import { ModernLoginPage } from '../pages/ModernLoginPage';
import percySnapshot from '@percy/playwright';

test.describe('Hudl Login UI - Positive and Negative Cases', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.goto();
  });

  test('Valid email format allows Continue', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.enterEmail('test.user@example.com');
    await expect(loginPage.continueButton).toBeEnabled();
    await percySnapshot(page, 'Valid Email Input');
  });

  test('Empty email shows required error', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.continueButton.click();
    await expect(loginPage.emailInput).toHaveAttribute('aria-invalid', 'true');
    await percySnapshot(page, 'Empty Email Error');
  });

  test('Invalid email format shows error', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.enterEmail('invalidemail@');
    await loginPage.continueButton.click();
    await expect(loginPage.emailInput).toHaveAttribute('aria-invalid', 'true');
    await percySnapshot(page, 'Invalid Email Format');
  });

  test('Create Account link navigates to sign-up page', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.clickSignUp();
    await expect(page).toHaveURL(/.*signup/);
  });

  test('Google, Facebook, and Apple buttons are visible and clickable', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await expect(loginPage.googleButton).toBeVisible();
    await expect(loginPage.facebookButton).toBeVisible();
    await expect(loginPage.appleButton).toBeVisible();
    await percySnapshot(page, 'Social Login Buttons');
  });

  test('Email field prevents HTML/script injection', async ({ page }) => {
    const loginPage = new ModernLoginPage(page);
    await loginPage.enterEmail('<script>alert(1)</script>');
    await loginPage.continueButton.click();
    await expect(page).not.toHaveDialog();
    await percySnapshot(page, 'Sanitized Script Input');
  });
});

// pages/ModernLoginPage.ts
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
  }

  async clickSignUp() {
    await this.createAccountLink.click();
  }
}
