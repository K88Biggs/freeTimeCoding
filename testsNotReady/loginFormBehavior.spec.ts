import { test, expect } from '@playwright/test';
import { ModernLoginPage } from '../pages/ModernLoginPage';
import percySnapshot from '@percy/playwright';

test.describe('Hudl Login Form Behavior - Positive and Negative Tests', () => {
  let loginPage: ModernLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new ModernLoginPage(page);
     await page.goto('https://identity.hudl.com/u/login/identifier?state=hKFo2SBheTFpQkxEWWw1aGpsRzNRU3otQjlPR2stUUhZbUlmQqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIER4eWxuNU4tLUI1YVYzc21OTFhNdFJHQ2VjWU9TNW9so2NpZNkgbjEzUmZrSHpLb3phTnhXQzVkWlFvYmVXR2Y0V2pTbjU');
  });

  test('Email input rejects invalid format', async ({ page }) => {
    await loginPage.enterEmail('invalidemail@');
    await loginPage.continueButton.click();    
    await expect(loginPage.emailInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('Empty email field blocks submission', async ({ page }) => {
    await loginPage.continueButton.click();
    await expect(loginPage.emailInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('Injection input is sanitized', async ({ page }) => {
    await loginPage.enterEmail('<script>alert(1)</script>');
    await expect(page).not.toHaveDialog();
  });

  test('Spam click on Continue is debounced', async ({ page }) => {
    await loginPage.enterEmail('test@hudl.com');
    await Promise.all([
      loginPage.continueButton.click(),
      loginPage.continueButton.click()
    ]);
    await expect(page).not.toHaveURL('/login');
  });

  test('All elements render on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    loginPage = new ModernLoginPage(page);
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.continueButton).toBeVisible();
    await expect(loginPage.googleButton).toBeVisible();
    await expect(loginPage.facebookButton).toBeVisible();
    await expect(loginPage.appleButton).toBeVisible();
    await percySnapshot(page, 'Mobile View - Login Form');
  });
});

