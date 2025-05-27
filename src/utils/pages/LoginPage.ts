import { ElementHandle, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  private usernameInput(): Promise<Locator> {
    return super.getElement('[data-test="username"]')
  }

  private  passwordInput(): Promise<Locator> {
    return super.getElement('[data-test="password"]');
  }

  private loginButton(): Promise<Locator> {
    return super.getElement('[data-test="login-button"]');
  }

  private errorMessage(): Promise<Locator> {
    return super.getElement('[data-test="error"]');
  }

  async login(username: string, password: string) {
    await this.usernameInput().then(input => input.fill(username));
    await this.passwordInput().then(input => input.fill(password));
    await this.loginButton().then(button => button.click());
  }

  async getErrorMessage(): Promise<string | null> {
    const element = await this.errorMessage();
    return await element.textContent();
  }
}