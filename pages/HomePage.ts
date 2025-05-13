import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private page: Page) {
   this.page = page;   
   this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.continueButton = page.locator('[data-action-button-primary="true"]'); 
}

async gotoLogin() {
  await this.page.goto('https://identity.hudl.com/u/login/identifier?state=hKFo2SBUQ2x2Y2lIZ2U3YWpKTkp4SFhIcEpjTjVDaUo4T1ZzaaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHFJV0x4aC1QdjBqSnhqMlNMTWNVSWJlT255TUxUQWdIo2NpZNkgbjEzUmZrSHpLb3phTnhXQzVkWlFvYmVXR2Y0V2pTbjU');
}

async gotoHome() {
  await this.page.goto('https://www.hudl.com/home');
}

  // --- Login Methods ---
  async enterEmail(email: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill('');
    await this.emailInput.fill(email);
  }

  async submitEmail() {
    await this.loginButton.click();
  }

  async enterPassword(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toBeEnabled();
    await this.passwordInput.fill('');
    await this.passwordInput.fill(password);
  }

  async submitPassword() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.submitEmail();
    await this.enterPassword(password);
    await this.submitPassword();
  }

  // --- Navigation Links ---
  navLink(label: string): Locator {
    return this.page.locator(`nav >> text=${label}`);
  }

  async clickNavLink(label: string) {
    await this.navLink(label).click();
  }

  // --- Mobile Menu ---
  async toggleMobileMenu() {
    await this.page.locator('button[aria-label="Open Menu"]').click();
  }

  // --- Hero Section ---
  heroTitle(): Locator {
    return this.page.locator('h1');
  }

  getADemoButton(): Locator {
    return this.page.locator('a:has-text("Get a Demo")');
  }

  // --- Footer ---
  footerLink(label: string): Locator {
    return this.page.locator('footer >> text=' + label);
  }

  newsletterForm(): Locator {
    return this.page.locator('form[action*="newsletter"]');
  }

  // --- Cookie Banner ---
  cookieBanner(): Locator {
    return this.page.locator('#cookie-consent');
  }

  async acceptCookies() {
    await this.page.locator('button:has-text("Accept")').click();
  }
}
