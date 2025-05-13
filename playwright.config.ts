import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'], // Optional: shows results in console
  ],
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
//    video: 'on'
video: 'retain-on-failure',
  //  baseURL: 'https://www.hudl.com/',
    baseURL: 'https://identity.hudl.com',
    trace: 'on-first-retry',
  },
// projects: [
// {name: 'chromium', use: {browserName: 'chromium'} },
// {name: 'firefox', use: {browserName: 'firefox'} },
// {name: 'webkit', use: {browserName: 'webkit'} },
// ],
});

