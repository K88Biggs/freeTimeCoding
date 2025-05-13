import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import * as dotenv from 'dotenv';
dotenv.config();

let homepage: HomePage;

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);

  await homepage.gotoLogin(); // use login URL
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error('❌ EMAIL or PASSWORD is undefined.');
  }

  await homepage.login(email, password);

  await page.waitForURL(/dashboard|home/i); // optional wait

  test('should show navigation links after login', async () => {
    await expect(homepage.navLink('Features')).toBeVisible();
    await expect(homepage.navLink('Solutions')).toBeVisible();
    await expect(homepage.navLink('Pricing')).toBeVisible();
  });

  test('should display hero section and CTA button', async () => {
    await expect(homepage.heroTitle()).toContainText(/Make content planning easy/i);
    await expect(homepage.getADemoButton()).toBeVisible();
  });

  test('should show footer and newsletter form', async () => {
    await expect(homepage.footerLink('Privacy Policy')).toBeVisible();
    await expect(homepage.newsletterForm()).toBeVisible();
  });

});
