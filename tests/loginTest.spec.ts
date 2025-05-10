import { test, expect } from '@playwright/test';

test('buttonClickInEmail', async ({ page }) => {
  await page.goto('https://identity.hudl.com/u/login/identifier?state=hKFo2SBheTFpQkxEWWw1aGpsRzNRU3otQjlPR2stUUhZbUlmQqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIER4eWxuNU4tLUI1YVYzc21OTFhNdFJHQ2VjWU9TNW9so2NpZNkgbjEzUmZrSHpLb3phTnhXQzVkWlFvYmVXR2Y0V2pTbjU');
  await expect(page).toHaveTitle(/Log In/);
});
