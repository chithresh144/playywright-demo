import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
export class CompanyPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    // ✅ Declare faker data at class level
    readonly companyName = faker.company.name();
    readonly website = faker.internet.url();
    readonly phone = faker.string.numeric(10);
    readonly mobile = faker.string.numeric(10);

    readonly street = faker.location.streetAddress();
    readonly city = faker.location.city();
    readonly state = faker.location.state();
    readonly zip = faker.location.zipCode();

    readonly email = faker.internet.email();
    readonly altEmail = faker.internet.email();

    readonly linkedinUrl = faker.internet.url();

    readonly industry = faker.commerce.department();
    readonly employees = faker.string.numeric(4);
    readonly symbol = faker.company.name().substring(0, 5);
    readonly revenue = faker.string.numeric(8);

    readonly vatNumber = faker.string.alphanumeric(12).toUpperCase();


    async navigateToCompanies() {

        await this.page.locator('#main-nav').waitFor(); // wait sidebar load
        await this.page.locator('a[href="/companies"]').click();

    }

    async clickAddCompany() {

        await this.page.locator('i.plus.inverted.icon').nth(2).click();
    }





    async fillCompanyDetails() {

        await this.page.getByRole('textbox').nth(1).fill(this.companyName);

        await this.page.locator('input[name="url"]').fill(this.website);

        await this.page.getByRole('textbox', { name: 'Number' }).fill(this.phone);
        await this.page.getByRole('textbox', { name: 'Home, Work, Mobile...' }).fill(this.mobile);

        await this.page.getByRole('textbox', { name: 'Street Address' }).fill(this.street);
        await this.page.getByRole('textbox', { name: 'City' }).fill(this.city);
        await this.page.getByRole('textbox', { name: 'State / County' }).fill(this.state);
        await this.page.getByRole('textbox', { name: 'Post Code' }).fill(this.zip);

        await this.page.getByRole('textbox', { name: 'Email address' }).fill(this.email);
        await this.page.getByRole('textbox', { name: 'Personal email, Business, Alt' }).fill(this.altEmail);

        await this.page.getByRole('combobox')
            .filter({ hasText: 'No results found.' }).click();

        await this.page.locator('.ui.active > .search.icon').click();

        await this.page.locator('textarea[name="description"]')
            .fill(faker.company.catchPhrase()); // can stay inline

        await this.page.locator('.three > div > .ui > .dropdown').click();
        await this.page.getByRole('option', { name: 'LinkedIn' }).click();

        await this.page.getByRole('textbox', { name: 'LinkedIn profile link' })
            .fill(this.linkedinUrl);

        await this.page.locator('input[name="industry"]').fill(this.industry);
        await this.page.locator('input[name="num_employees"]').fill(this.employees);
        await this.page.locator('input[name="symbol"]').fill(this.symbol);
        await this.page.locator('input[name="annual_revenue"]').fill(this.revenue);

        await this.page.getByRole('listbox')
            .filter({ hasText: 'SelectLowMediumHigh' }).click();
        await this.page.getByText('Medium').click();

        await this.page.getByText('SelectNewActiveInactiveOn').click();
        await this.page.getByRole('option', { name: 'Active', exact: true }).click();

        await this.page.getByText('SelectAdReferralCustomerPartnerEventInternetWalk inCall inEmailWeb ServiceImport').click();
        await this.page.getByText('Customer').nth(0).click();

        await this.page.locator('div:nth-child(9) > div > .ui.field > .ui > .dropdown').click();
        await this.page.getByRole('option', { name: 'Partner' }).click();

        await this.page.locator('input[name="vat_number"]').fill(this.vatNumber);

        await this.page.locator('input[name="identifier"]').click();

        await this.page.getByRole('button', { name: 'Save' }).click();
        console.log("Filled the deatils in company page and created a company")
    }

    async verification() {

        await this.page.getByPlaceholder("Search").fill(this.companyName);
        await this.page.getByPlaceholder("Search").press("Enter");

        const companyResult = this.page
            .locator('.edit-in-place-holder').nth(0)

        await companyResult.waitFor();

        const companyNameText = await companyResult.textContent();

        console.log("Company name displayed after searching is:", companyNameText);

        expect(companyNameText?.trim()).toBe(this.companyName);

        console.log("Verified the search functionality for company name");
        await this.page.locator("//a[contains(text(),'Contacts')]").click()
        const contacts = await this.page.locator(".no-content").textContent()
        if (contacts === 'Empty.') {
            console.log("There are no linked contacts")
        } else {
            console.log(contacts)
        }
    }

    async searchCompany(companyName: string) {
        await this.page.locator(".item-text").nth(3).click()
        await this.page.getByPlaceholder("Search").click()
        await this.page.getByPlaceholder("Search").fill(companyName);
        await this.page.getByPlaceholder("Search").press("Enter");
        await this.page.locator(".content").nth(4).click()
        await this.page.locator('a[href="/companies/f973019f-2f5f-46d9-b88f-b459d3802372"]').click()
        const companyResult = this.page
            .locator('.edit-in-place-holder').nth(0)

        await companyResult.waitFor();

        const companyNameText = await companyResult.textContent();

        console.log("Company name displayed after searching is:", companyNameText);

        expect(companyNameText?.trim()).toBe(companyName);
        console.log("Verified the company name by seraching")
        await this.page.locator("//a[contains(text(),'Contacts')]").click()
        const contacts = await this.page.locator(".no-content").textContent()
        if (contacts === 'Empty.') {
            console.log("There are no linked contacts")
        } else {
            console.log(contacts)
        }

    }

    async editdetails(companyName: string) {
        const row = this.page.locator('table tbody tr')
            .filter({ has: this.page.locator(`td a:text-is("${companyName}")`) })
        await row.locator('i.edit.icon').click()
        const existingURL = await this.page.locator('input[name="url"]').innerText()
        console.log("Existing URL is ", existingURL)
        await this.page.locator('input[name="url"]').fill(this.website);
        await this.page.getByRole('textbox', { name: 'Street Address' }).fill(this.street);
        await this.page.getByRole('textbox', { name: 'City' }).fill(this.city);
        await this.page.getByRole('textbox', { name: 'State / County' }).fill(this.state);
        await this.page.getByRole('textbox', { name: 'Post Code' }).fill(this.zip);
        const existingDescription = await this.page.locator('textarea[name="description"]').innerText()
        console.log("Existing Description is ",existingDescription)
        await this.page.locator('textarea[name="description"]')
            .fill(faker.company.catchPhrase());
        await this.page.getByRole('button', { name: 'Save' }).click();  
        console.log("updated the values of url, description from ", existingURL, existingDescription ," to ", this.website, faker.company.catchPhrase()  )  
    }

    async deleteCompany(companyName: string) {
        const row = this.page.locator('table tbody tr')
            .filter({ has: this.page.locator(`td a:text-is("${companyName}")`) })
        await row.locator('button:has(.trash.icon)').click()
        await this.page.locator(".ui.red.button").click()
        console.log(companyName, "has been successgully deleted")
    }
}
