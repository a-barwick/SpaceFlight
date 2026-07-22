import { expect, test } from '@playwright/test';

test('navigates from the archive index to the complete mission record', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /modern space flight/i })).toBeVisible();

  await page.getByRole('link', { name: /open mission record/i }).click();
  await expect(page).toHaveURL(/missions\/starship-flight-5/);
  await expect(page.getByRole('heading', { name: 'Flight 5', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Event timeline' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
});

test('preserves the company to vehicle to mission hierarchy', async ({ page }) => {
  await page.goto('/companies/spacex');
  await page.getByRole('link', { name: /Starship/ }).click();
  await expect(page.getByRole('heading', { name: 'Starship' })).toBeVisible();
  await page.getByRole('link', { name: /Flight 5/ }).click();
  await expect(page.getByRole('heading', { name: 'Flight 5', exact: true })).toBeVisible();
});

test('has a keyboard-accessible content shortcut', async ({ page }) => {
  await page.goto('/missions/starship-flight-5');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});

test('loads the licensed mission photography and attribution', async ({ page }) => {
  await page.goto('/missions/starship-flight-5');
  await page.getByRole('heading', { name: 'Gallery' }).scrollIntoViewIfNeeded();

  const galleryImages = page.locator('.gallery-grid img');
  await expect(galleryImages).toHaveCount(3);
  await expect(galleryImages.first()).toBeVisible();
  await galleryImages.last().scrollIntoViewIfNeeded();
  expect(
    await galleryImages.evaluateAll((images) =>
      images.every((image) => (image as HTMLImageElement).naturalWidth > 0)
    )
  ).toBe(true);
  await expect(page.getByRole('link', { name: 'CC BY 2.0' }).first()).toBeVisible();
});
