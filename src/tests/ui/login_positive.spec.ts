import { test, expect } from '@playwright/test';
import { LoginPage } from '../../utils/pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Go to the login page
  await loginPage.goto('https://www.saucedemo.com/');

  // Perform login with valid credentials (these are the standard demo credentials)
  await loginPage.login('standard_user', 'secret_sauce');

  // Assert that the user is redirected to the inventory page
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});