import { test, expect } from '@playwright/test'

test('login validation', async ({ page }) => {
    await page.goto("http://orangehrm.qedgetech.com/")
    await expect(page.locator('#btnLogin')).toBeVisible()
    const username = page.locator('#txtUsername')
    const password = page.locator('#txtPassword')

    await username.fill("Admin")
    //await expect(username).toHaveText("Admin")

    await password.fill("Qedge123!@#")
    //await expect(password).toHaveText("Qedge123!@#")

    await page.locator('#btnLogin').click()

    const expected = "dashboard"
    const actual = page.url()

    if (actual.includes(expected)) {
        console.log("Login Sucess ", expected, " ", actual)
    }
    else {
        const errormessage = await page.locator('#spanMessage').textContent()
        console.log(errormessage)
    }
})