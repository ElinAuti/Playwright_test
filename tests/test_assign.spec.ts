import { test, expect } from '@playwright/test';

test('Write text', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Everything!');
  await page.locator('html').click();
  await page.getByRole('heading', { name: 'todos' }).click();
});