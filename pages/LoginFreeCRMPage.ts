import { Page, Locator } from '@playwright/test';

export class LoginFreeCRMPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('div.ui.fluid.large.blue.submit.button');
  }
  
  async navigate() {
    await this.page.goto('/');
    console.log("Navigate to the Free CRM application")
  }

  async login() {
    const [newTab]=await Promise.all([
        this.page.waitForEvent("popup"),
        this.page.locator("//a[contains(text(),'Log in')]").click()
    ])
    await newTab.getByPlaceholder("Email").fill("Chithresh144@gmail.com")
    await newTab.getByPlaceholder("Password").fill("Freecrm@144")
    await newTab.locator("//div[contains(text(),'Login')]").click()
    console.log("Logged in with credentials")
    await newTab.getByRole('link', { name: ' Companies' }).hover()
    console.log("Hovered on the side drawer having companies")
    await newTab.locator("i.plus.inverted.icon").nth(2).click()
    console.log("Clicked on the compnaies from the side drawer")
    await newTab.waitForLoadState();

    return newTab;

  }
  

}
