import { test } from '@playwright/test'
import { LoginFreeCRMPage } from './pages/LoginfreeCRMPage'
import { CompanyPage } from './pages/CompanyPage'

test('Free CRM creating company', async ({ page }) => {
    const loginpae = new LoginFreeCRMPage(page)
    await loginpae.navigate()
    const newTab = await loginpae.login()
    const companyPage = new CompanyPage(newTab)
    await companyPage.navigateToCompanies()
    await companyPage.clickAddCompany()
    await companyPage.fillCompanyDetails()
    const screenshot = await newTab.screenshot()
    await test.info().attach('Search Result', {
        body: screenshot,
        contentType: 'image/png',
    })

})

test('verifying the company by searching', async ({ page }) => {
    const loginpae = new LoginFreeCRMPage(page)
    await loginpae.navigate()
    const newTab = await loginpae.login()
    const companyPage = new CompanyPage(newTab)
    await companyPage.navigateToCompanies()
    await companyPage.searchCompany("McGlynn - Bergnaum")
    
const screenshot = await newTab.screenshot()
    await test.info().attach('Search Result', {
        body: screenshot,
        contentType: 'image/png',
    })


})

test('editing the existing company values', async ({ page }) => {
    const loginpae = new LoginFreeCRMPage(page)
    await loginpae.navigate()
    const newTab = await loginpae.login()
    const companyPage = new CompanyPage(newTab)
    await companyPage.navigateToCompanies()
    await companyPage.editdetails("McGlynn - Bergnaum")
    
    const screenshot = await newTab.screenshot()
    await test.info().attach('Edited Company', {
        body: screenshot,
        contentType: 'image/png',
    })

})

test('deleting the company', async ({ page }) => {
    const loginpae = new LoginFreeCRMPage(page)
    await loginpae.navigate()
    const newTab = await loginpae.login()
    const companyPage = new CompanyPage(newTab)
    await companyPage.navigateToCompanies()
    await companyPage.deleteCompany("Apple")
    
    const screenshot = await newTab.screenshot()
    await test.info().attach('Deleted Company', {
        body: screenshot,
        contentType: 'image/png',
    })

})
