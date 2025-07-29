
import { test, expect } from '@playwright/test';

test.describe('MERN App E2E Tests', () => {
  test('should navigate to dashboard and open modal', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page).toHaveTitle(/Meshery CI Testkit/);
    await page.click('button:has-text("Add Deployment")');
    await expect(page.locator('h2:has-text("Add New Deployment")')).toBeVisible();
  });

  test('should navigate to settings and toggle dark mode', async ({ page }) => {
    await page.goto('http://localhost:5173/settings');
    await page.click('input[type="checkbox"]');
    const bodyBackgroundColor = await page.evaluate(() => {
      return window.getComputedStyle(document.body).getPropertyValue('background-color');
    });
    expect(bodyBackgroundColor).toBe('rgb(18, 18, 18)');
  });
});
