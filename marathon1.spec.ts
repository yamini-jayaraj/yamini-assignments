import test, { expect } from '@playwright/test'
test("opening the url",async({page,context})=>{
    
    await context.grantPermissions([],{origin:"https://www.pvrcinemas.com/"})

    //login
await page.goto("https://www.pvrcinemas.com/") 
await page.locator("//div[@class='cities-overlay cities-active']").nth(5).click(),
await page.waitForTimeout(4000)
await page.locator("//span[@class='cinemas-inactive']").click()
await page.locator("//span[@class='p-dropdown-label p-inputtext p-placeholder']").nth(1).click()
await page.locator("//span[text()='INOX Chennai Citi Centre,Dr. R. K. Salai Chennai']").click()
await page.locator("//span[text()='Today']").click()
await page.locator("//span[text()='MY LORD']").nth(1).click()
await page.locator("//span[text()='10:10 PM']").click()
await page.locator("//span[@class='p-button-label p-c']").nth(4).click()
await page.locator("//button[@class='sc-kCuUfV iBvycX reject-terms']").click()
//await page.locator("//button[@class='sc-kCuUfV iBvycX reject-terms']").click()
await page.locator("//span[@id='CL.Club|E:16']").click()
await page.waitForTimeout(4000)
const seatnumber =await page.locator("//td[@class='seats-col']").nth(105).innerText()

console.log(seatnumber)

const totalamount =await page.locator("//h6[text()='218.02']").innerText()

console.log(totalamount)
await page.locator("//button[@class='sc-bbbBoY kbsOBB btn-proceeded']").click()
await page.waitForTimeout(4000)
})