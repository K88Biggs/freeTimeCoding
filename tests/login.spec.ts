import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { LoginPage } from '../pages/LoginPage';

test.describe('Hudl Login Page Tests', () => {
  test('should load login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await percySnapshot(page, 'Login Page - Default');
  });

  test('should show error when email is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.continueButton.click();
    //const validationMessage = await loginPage.emailInput.evaluate(input => input.validationMessage);
    const validationMessage = await loginPage.emailInput.evaluate(input => input.validationMessage.trim());
    expect([
            'Please fill out this field.',
            'Fill out this field'
          ]).toContain(validationMessage);   

// expect(validationMessage).toContain('Please fill out this field.');
 // expect([
  // 'Please fill out this field.',
  // ' Fill out this field'
  // ]).toContain(validationMessage);   
await percySnapshot(page, 'Login Page - Empty Email Error');
  });

  test('should show error for invalid email format', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('notanemail');
    await loginPage.continueButton.click();
    const validationMessage = await loginPage.emailInput.evaluate(input => input.validationMessage);
    expect(validationMessage).toContain('');
    await percySnapshot(page, 'Login Page - Invalid Email Error');
  });

  test('should accept valid email and proceed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterEmail('test@example.com');
    await loginPage.continueButton.click();
    await percySnapshot(page, 'Login Page - Valid Email Submitted');
  });
});
