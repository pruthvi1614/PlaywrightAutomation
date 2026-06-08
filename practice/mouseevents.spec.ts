import { test, expect } from '@playwright/test'

test('Handling Right Click', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.getByText('right click me').click({ button: "right" })
    await page.getByText('Quit').click({ force: true })
})

test('Handling Double Click', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    page.on('dialog', async (dialog) => {
        const alerttype = dialog.type()
        console.log("Dialog Type: " + alerttype)
        const alertMessage = dialog.message()
        console.log("Alert Message: " + alertMessage)
        dialog.accept()
    })
    await page.getByText('Double-Click Me To See Alert').click({ clickCount: 2 })
    //we can use dblclick() also for double click
    await page.getByText('Double-Click Me To See Alert').dblclick() 
})