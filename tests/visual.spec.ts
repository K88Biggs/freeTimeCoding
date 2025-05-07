import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('Homepage visual snapshot', async ({ page }) => {
  await page.goto('https://example.com');
  await percySnapshot(page, 'Example homepage');
});
