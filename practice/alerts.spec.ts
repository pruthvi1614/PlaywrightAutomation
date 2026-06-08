import { test, expect } from '@playwright/test'

test('Handling Alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async (dialog) => {
        const alerttype = dialog.type()
        console.log("Dialog Type: " + alerttype)
        const alertMessage = dialog.message()
        console.log("Alert Message: " + alertMessage)
        dialog.accept()
    })
    await page.getByText('Click for JS Alert', { exact: true }).click()
    await expect(page.locator('#result')).toContainText("You successfully clicked an alert")
    console.log(await page.locator('#result').textContent())
    console.log("====================================================")
})

test('Handling Confirm/Cancel dialog', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async(dialog)=>{
        console.log("Dialog Type: "+dialog.type())
        console.log("Dialog Message: "+dialog.message())
        dialog.dismiss()
    })
    await page.getByText('Click for JS Confirm').click()
    console.log(await page.locator('#result').textContent())
    console.log("====================================================")
})

test('Handling Prompts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
        page.on('dialog',async(dialog)=>{
        console.log("Dialog Type: "+dialog.type())
        console.log("Dialog Message: "+dialog.message())
        dialog.accept("I am Pruthvi raj")
    })
    await page.getByText('Click for JS Prompt').click()
    console.log(await page.locator('#result').textContent())
    console.log("====================================================")
})