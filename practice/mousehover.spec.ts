import { test, expect } from '@playwright/test'

function generateSkillName(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    return `Playwright_${day}${month}${hour}${minute}${second}`;
}

const skillName = generateSkillName();
test.describe.configure({ mode: 'serial' });

test('01 - Mousehovering and saving records', async ({ page }) => {
    await page.goto('http://orangehrm.qedgetech.com')
    await page.locator('#txtUsername').fill('Admin')
    await page.locator('#txtPassword').fill('Qedge123!@#')
    await page.locator('#btnLogin').click()
    await page.locator('#menu_admin_viewAdminModule').hover()
    await page.locator('#menu_admin_Qualifications').hover()
    await page.locator('#menu_admin_viewSkills').click()
    await page.locator('#btnAdd').click()
    await page.locator('#skill_name').fill(skillName)
    await page.locator('#skill_description').fill("This is Playwright description")
    await page.locator('#btnSave').click()
    await expect(page.locator('.message.success.fadable')).toContainText("Successfully Saved")
    const recordsCount = await page.locator('tbody tr a').count()
    console.log("Records count: " + recordsCount)
    let recordFound = false;
    for (let i = 0; i < recordsCount; i++) {
        const recordlist = await page.locator('tbody tr a').nth(i).textContent()
        console.log(`Record list ${i + 1}: ${recordlist}`)
        if (recordlist === skillName) {
            recordFound = true;
            break;
        }
    }
    expect(recordFound, `Record '${skillName}' was not found in the table`).toBe(true);
})

test('02 - Mousehovering and deleting the records', async ({ page }) => {
    await page.goto('http://orangehrm.qedgetech.com')
    await page.locator('#txtUsername').fill('Admin')
    await page.locator('#txtPassword').fill('Qedge123!@#')
    await page.locator('#btnLogin').click()
    await page.locator('#menu_admin_viewAdminModule').hover()
    await page.locator('#menu_admin_Qualifications').hover()
    await page.locator('#menu_admin_viewSkills').click()
    const row = page.locator('tbody tr', { hasText: skillName })
    console.log(row)
    await row.locator('.checkboxAtch').check()
    await page.locator('#btnDel').click()
    await expect(page.locator('.message.success.fadable')).toContainText("Successfully Deleted")
    console.log(await page.getByText('Successfully Deleted', { exact: true }).textContent())
    const recordsCount = await page.locator('tbody tr a').count()
    console.log("Records count: " + recordsCount)
    let recordFound = false;
    for (let i = 0; i < recordsCount; i++) {
        const recordlist = await page.locator('tbody tr a').nth(i).textContent()
        if (recordlist === skillName) {
            recordFound = true;
            break;
        }
    }
    if (recordFound) {
        console.log(`${skillName} record still exists in table`)
    } else {
        console.log(`${skillName} record is removed from table`)
    }
    expect(recordFound, `Record '${skillName}' was not deleted from table`).toBe(false);
})

test('Drag and drop' , async({page})=>{
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html')
    const dragElement = page.locator('#draggable')
    const dropElement = page.locator('#droppable')
    const dropMessage = await dropElement.textContent()
    console.log(dropMessage?.trim())
    //console.log(await page.getByText("Drop here").textContent())
    await dragElement.dragTo(dropElement)
    const afterDropMessage = await page.locator('#droppable').textContent()
    console.log(afterDropMessage?.trim())

    await page.locator('#draggable').dragTo(page.locator('#droppable'))
})