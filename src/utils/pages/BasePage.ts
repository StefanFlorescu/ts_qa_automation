import { ElementHandle, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  private readonly baseUrl: string = 'https://www.example.com'; // Set your base URL here

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string | null): Promise<void> {
        if (url) {
            await this.page.goto(url);
        } else {
            await this.page.goto(this.baseUrl);
        }
        }

    async click(selector: string): Promise<void> {
    await this.page.click(selector);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async reload(): Promise<void> {
        await this.page.reload();
    }

    async getElement(selector: string): Promise<Locator> {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible' });
        return element;
    }

  // Add more common methods as needed
}