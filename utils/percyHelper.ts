import { Page } from '@playwright/test';
import percySnapshot from '@percy/playwright';

export async function snapshot(page: Page, name: string, browserName: string) {
  await percySnapshot(page, `${name} - ${browserName}`);
}
