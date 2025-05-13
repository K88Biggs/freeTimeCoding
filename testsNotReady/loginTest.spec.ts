import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';
import { ModernLoginPage } from '../pages/ModernLoginPage';

test('buttonClickInEmail', async ({ page }) => {
  await page.goto('https://identity.hudl.com/u/login/identifier?state=hKFo2SBheTFpQkxEWWw1aGpsRzNRU3otQjlPR2stUUhZbUlmQqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIER4eWxuNU4tLUI1YVYzc21OTFhNdFJHQ2VjWU9TNW9so2NpZNkgbjEzUmZrSHpLb3phTnhXQzVkWlFvYmVXR2Y0V2pTbjU');
  await expect(page).toHaveTitle(/Log In/);
  await percySnapshot(page, 'Hudl Login Page');
});

test('should show required field error when email is empty', async ({ page }) => {
  const loginPage = new ModernLoginPage(page);
  await loginPage.goto(page);

  // Try to submit without filling email
  await loginPage.continueButton.click();

  // Check HTML5 form validation status
  const isInvalid = await loginPage.emailInput.evaluate(el => el.validity.valueMissing);
  expect(isInvalid).toBe(true);
});

