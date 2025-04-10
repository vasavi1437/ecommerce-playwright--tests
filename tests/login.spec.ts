// tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(); // Navigates to the login page
  });

  test('Valid login should redirect to secure area', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  test('Invalid login should show error message', async ({ page }) => {
    await loginPage.login('invalidUser', 'invalidPass');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
  });
});
