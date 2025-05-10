import { test, expect } from '@playwright/test';
import { SetPasswordPage } from '../pages/SetPasswordPage';
import percySnapshot from '@percy/playwright';

const getPasswordFromArgs = (): string => {
  const arg = process.argv.find(arg => arg.startsWith('--password='));
  return arg ? arg.split('=')[1] : '';
};

test.describe('Set Password Page Tests', () => {
  const validPassword = getPasswordFromArgs();

  test.skip(validPassword === '', 'Valid password must be provided via --password argument');

  test('Valid password creation', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await cp.setPassword(validPassword, validPassword);
    await percySnapshot(page, 'Valid Password Creation');
    await expect(page).toHaveURL(/.*dashboard|login/);
  });

  test('Mismatch password shows error', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await cp.setPassword(validPassword, validPassword + '!');
    await percySnapshot(page, 'Mismatch Password Error');
    await expect(cp.errorMessage).toBeVisible();
  });

  test('Weak password is rejected (missing number)', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await cp.setPassword('WeakPass!', 'WeakPass!');
    await percySnapshot(page, 'Weak Password - Missing Number');
    await expect(cp.errorMessage).toBeVisible();
  });

  test('Short password is rejected (<8)', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await cp.setPassword('S1!', 'S1!');
    await percySnapshot(page, 'Short Password Error');
    await expect(cp.errorMessage).toBeVisible();
  });

  test('Empty password fields show error', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await cp.setPassword('', '');
    await percySnapshot(page, 'Empty Fields Error');
    await expect(cp.errorMessage).toBeVisible();
  });

  test('Password fields render correctly on mobile', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await page.setViewportSize({ width: 375, height: 812 });
    await cp.goto();
    await percySnapshot(page, 'Mobile View - Set Password');
    await expect(cp.newPasswordInput).toBeVisible();
    await expect(cp.confirmPasswordInput).toBeVisible();
    await expect(cp.createPasswordButton).toBeVisible();
  });

  test('Input fields allow paste (if permitted)', async ({ page }) => {
    const cp = new SetPasswordPage(page);
    await cp.goto();
    await page.evaluate(() => {
      navigator.clipboard.writeText('Test123!');
    });
    await cp.newPasswordInput.focus();
    await page.keyboard.press('Control+V');
    const value = await cp.newPasswordInput.inputValue();
    expect(value).toContain('Test123');
  });
});
