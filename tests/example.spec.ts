import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.gronalund.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Gröna Lund/);
});

test('to store page', async ({ page }) => {
  await page.goto('https://www.gronalund.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Priser och Biljetter' })).toBeVisible();
});


