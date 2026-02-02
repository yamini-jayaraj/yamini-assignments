import test,{ chromium ,webkit} from '@playwright/test'


test("open the page",async()=>{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(4000)
})


test("open the page",async()=>{
    const browser=await webkit.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(4000)
})
