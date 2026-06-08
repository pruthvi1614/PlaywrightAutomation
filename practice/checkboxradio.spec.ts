import { test, expect } from '@playwright/test'

test('Verify check box', async ({ page }) => {
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")
    const checkbox = page.locator('#remember')
    const isChecked: boolean = await checkbox.isChecked()
    console.log(isChecked)
    // if (isChecked == true) {
    //     await checkbox.uncheck()
    //     console.log("Unchecked the checkbox")
    // } else {
    //     console.log("checkbox is already unchecked")
    // }
    await expect(checkbox).toBeChecked({ checked: true })
    await checkbox.uncheck()
    await expect(checkbox).toBeChecked({ checked: false })
})


// test('Jquery check box verification', async ({ page }) => {
//     await page.goto("https://jqueryui.com/checkboxradio")
//     const checkbox = page.locator('#remember')
//     const isChecked:boolean = await checkbox.isChecked()
//     console.log(isChecked)
//     await expect(checkbox).toBeChecked()
//     await checkbox.uncheck()
// })

test('Count radio buttons', async ({ page }) => {
    await page.goto("https://qa-automation-practice.netlify.app/radiobuttons")
    const radiobuttons = page.locator('.form-check')
    const radiocount = await radiobuttons.count()
    console.log("Radio buttons count: " + radiocount)
    for (let i = 0; i < radiocount; i++) {
        const radioNames = await radiobuttons.nth(i).textContent()
        console.log(radioNames?.trim())
    }
})


test('Count radio buttons from jquery', async ({ page }) => {
    await page.goto("file://E:/Pruthvi%20Raj/My%20projects/Playwright/checkbox_1.html")
    const radiobuttons = page.locator("//input[@type='checkbox']")
    const radiocount = await radiobuttons.count()
    console.log("Radio buttons count: " + radiocount)
    for (let i = 0; i < radiocount; i++) {
        const eachCheckbox = radiobuttons.nth(i)
        const radioNames = await eachCheckbox.getAttribute('value')
        const checked: boolean = await eachCheckbox.isChecked()
        if (checked == true) {
            console.log(`${radioNames} => checked`)
        } else {
            console.log(radioNames?.trim())
        }
    }
})
