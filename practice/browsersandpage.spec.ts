import { test, expect } from '@playwright/test'

//browser fixtures
// test('browser fixture', async ({ browser }) => {
//     await browser.newContext() //to create browser context
//     const page = await browser.newPage() //to create fresh page in browser
//     await page.goto("https://google.com")
// })

//page fixture
test('Page fixture for facebook',async({page})=>{
    await page.goto("https://www.facebook.com")
})

test('Page fixture for linkedin',async({page})=>{
    await page.goto("https://www.linkedin.com")
})