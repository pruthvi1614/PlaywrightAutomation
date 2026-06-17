import {test,expect, Page} from '@playwright/test'

let page:Page
test.beforeAll(async({browser})=>{
page = await browser.newPage()
await page.goto('http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login')
await page.locator('#txtUsername').fill('Admin')
await page.locator('#txtPassword').fill('Qedge123!@#')
await page.locator('#btnLogin').click()
await page.waitForTimeout(2000)

console.log('before all hook executed')
})

test('Click Admin',async()=>{
    await page.locator('#menu_admin_viewAdminModule').click()
    console.log('Admin module clicked')
})
test('Click PIM',async()=>{
    await page.locator('#menu_pim_viewPimModule').click()
    console.log('PIM module clicked')
})
test('Click Leave',async()=>{
    await page.locator('#menu_leave_viewLeaveModule').click()
    console.log('Leave module clicked')
})

test.afterAll(async()=>{
    await page.locator('#welcome').click()
    await page.waitForTimeout(2000)
    await page.locator('text=Logout').click()
    console.log('after all hook executed')
})
