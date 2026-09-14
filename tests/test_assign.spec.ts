import { test, expect } from '@playwright/test';

test('har titel', async ({ page }) => {
  await page.goto('https://www.gronalund.com');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Gröna Lund/);
});

test('till biljett', async ({ page }) => {
  await page.goto('https://www.gronalund.com');
  // Click link
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  // Expects page to have a heading with the name of Priser och Biljetter.
  await expect(page.getByRole('heading', { name: 'Priser och Biljetter' })).toBeVisible();
});

test('köpa grönt kort', async({ page }) =>{
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await page.getByRole('link', { name: 'Köp nu' }).nth(2).click();
  await page.getByRole('heading', { name: 'Gröna Kortet till sommar 2027' }).click();
  await page.getByTestId('increase-button-Gröna Kortet').click();
});

test('5 kamp', async ({ page }) => {
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await page.locator('div:nth-child(4) > .core--base-list-group-renderer-module--list-wrapper--3519ee > div:nth-child(2) > .core--product-card-module--card--fcf78a > .core--product-card-module--contentWrapperBase--941f55 > .core--product-card-module--productPriceWrapper--dfd851 > .core--product-card-module--buttonWrapper--9781e4 > .core--link-module--link--f4a0dc').click();
  await page.getByRole('button', { name: 'Öka Antal' }).click();
  await page.getByRole('button', { name: 'Lägg i varukorg' }).click();
  await page.getByTestId('summary-total').getByText('kr').click();
});

test('entrebiljetter', async ({ page }) => {
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Halloweenbiljett' })).toBeVisible;
  await expect(page.getByRole('heading', { name: 'Rockbjörnen' })).toBeVisible;
});

test('tillval', async ({ page }) => {
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await page.getByRole('link', { name: 'Köp nu' }).nth(3).click();
  await page.getByRole('button', { name: 'Lägg i varukorg' }).click();
  await expect(page.getByRole('link', { name: 'Supergnutten' })).toBeVisible;
});

test('barnbiljett', async ({ page }) => {
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await page.getByRole('link', { name: 'Köp nu' }).first().click();
  await page.getByTestId('increase-button-Barn').click();
  await page.getByTestId('group-size-next-button').click();
});

test('vuxenbiljett', async ({ page }) => {
  await page.goto('https://www.gronalund.com/');
  await page.getByRole('link', { name: 'Biljetter', exact: true }).click();
  await page.getByRole('link', { name: 'Köp nu' }).first().click();
  await page.getByTestId('increase-button-Vuxen').click();
  await page.getByTestId('group-size-next-button').click();
});
