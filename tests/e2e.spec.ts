import { test, expect } from '@playwright/test';

test('should navigate to the settings page and verify settings content', async ({ page }) => {
  // Start from the index page (the baseURL is set in the playwright.config.ts)
  await page.goto('/');

  // Find a link with the text 'Settings' and click it.
  await page.click('text=Settings');

  // The new URL should be "/settings" (baseURL is used there)
  await expect(page).toHaveURL('/settings');

  // The new page should contain an h4 with "Settings"
  await expect(page.locator('h4')).toContainText('Settings');

  // Check for the presence of specific settings elements
  await expect(page.locator('text=Language')).toBeVisible();
  await expect(page.locator('text=Dark Theme')).toBeVisible();
});