//Import Playwright's test runner and assertion utilities
import { test, expect } from '@playwright/test';

//Import Percy snapshot tool for visual regression testing
import percySnapshot from '@percy/playwright';

//Import the Page Object Model class for the Login page
import { LoginPage } from '../pages/LoginPage';
import * as dotenv from 'dotenv';
dotenv.config();

//Tests to verify the Login page Loads correctly and that the password field is NOT visible by default
test.describe('Hudl Login Page Tests', () => {
  test('should load login page', async ({ page, browserName }) => {
    const loginPage = new LoginPage(page, browserName);
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await percySnapshot(page, 'Login Page Default');
  });

  test('should show error for invalid email format', async ({ page, browserName }) => {
    const loginPage = new LoginPage(page, browserName);
    await loginPage.goto();
    await loginPage.enterEmail('notanemail');
    await loginPage.submit();
    const validationMessage = await loginPage.emailInput.evaluate(input => input.validationMessage);
    expect(validationMessage).toContain('');
    await percySnapshot(page, 'Login Page - Invalid Email Error');
  });

  test('should accept valid email and proceed', async ({ page, browserName }) => {
    const loginPage = new LoginPage(page, browserName);
    await loginPage.goto();
    await loginPage.enterEmail('test@example.com');
    await loginPage.submit();
    await percySnapshot(page, 'Login Page - Valid Email Submitted');
  });

test('should verify the password input is visible after providing a valid email', async ({ page, browserName }) => {
  // Navigate to the page containing the password
  const loginPage = new LoginPage(page, browserName);
  await loginPage.goto();
  await loginPage.enterEmail('test@example.com');
  await loginPage.submit();  
// --- Locate the element ---
  const passwordInput = page.locator('#password');

  // --- Verify Visibility ---
  await expect(passwordInput).toBeVisible();
  console.log('Password input field is visible.');
});
test('should log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
if (!email || !password) {
    throw new Error('❌ EMAIL or PASSWORD is undefined. Check your .env file.');
  }
  await loginPage.login(email, password);
  await loginPage.submit();
  // Add assertion for successful login here
  await expect(page).toHaveURL(/.*hudl|home/i); // adjust for Hudl
});
});
