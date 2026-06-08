import { test, expect } from '@playwright/test'

test("Triggering screenshots manually", async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com')
    await page.locator('#txtUsername').fill("Admin")
    await page.locator('#txtPassword').fill("Qedge123!@#")
    await page.locator('#btnLogin').screenshot({path:'Loginsc.png'})
    await page.screenshot({path:'page.png'})
    await page.screenshot({path:'fullpage.png',fullPage:true})
    await page.locator('#btnLogin').click()


})