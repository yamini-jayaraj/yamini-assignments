import test, { expect } from '@playwright/test'
test("opening the url",async({page})=>{
    //login
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill("TestLeaf@2025")
await page.getByRole('button',{name:'Log In'}).click()
await page.waitForTimeout(12000)
//app launcher
await page.getByRole('button',{name:'App Launcher'}).click()
await page.getByRole('button',{name:'View All Applications'}).click()
await page.waitForTimeout(12000)
//select sales
await page.locator("//p[text()='Sales']").click()
await page.waitForTimeout(12000)
//select opportunities
await page.getByRole('link',{name:'Opportunities'}).click()
await page.getByRole('heading',{name:'Opportunities'}).isVisible()
await page.waitForTimeout(12000)
//click on New
await page.getByRole('button',{name:'New'}).click()
await page.getByRole('button',{name:'New'}).isVisible()
await page.waitForTimeout(12000)
//Add name
await page.locator('input[name="Name"]').fill("yamini jayaraj")
await page.waitForTimeout(12000)
//add close date
await page.locator('input[name="CloseDate"]').fill("07/02/2026")
await page.waitForTimeout(12000)
//select search account option
await page.getByPlaceholder("Search Accounts...").click()
await page.getByRole('listbox').getByRole('option').first().click()
//Select Stage
await page.locator("//button[@aria-label='Stage']").click()
await page.locator("[data-value= 'Needs Analysis']").click()
await page.waitForTimeout(2000)
//save the changes
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(2000)
await page.getByText("yamini jayaraj").first().isVisible()
console.log("opportunity created successfuly")

})