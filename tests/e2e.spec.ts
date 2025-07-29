import { test, expect } from '@playwright/test';

test.describe('MERN App E2E Tests', () => {
  test('should navigate to dashboard and open modal', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
    await page.click('[data-testid="add-deployment-button"]');
    await expect(page.locator('h3:has-text("Add New Deployment")')).toBeVisible();
  });

  test('should navigate to settings and toggle dark mode', async ({ page }) => {
    await page.goto('http://localhost:5173/settings');
    await page.click('span:has-text("Dark Mode")');
    const isDarkMode = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(isDarkMode).toBe(true);
  });
});