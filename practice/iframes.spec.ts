import { test, expect } from '@playwright/test'

test('Handling iframes 1',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    const frames = page.frameLocator('.demo-frame')
    const drag = frames.locator('#draggable')
    const drop = frames.locator('#droppable')
    await drag.dragTo(drop)
    await expect(frames.getByText('Dropped!')).toHaveText("Dropped!")
    console.log(await frames.getByText('Dropped!').textContent())
    await page.getByText('Download',{exact:true}).click()
    await page.waitForTimeout(3000)
})

test('Handling iframes 2',async({page})=>{ 
    await page.goto('https://jqueryui.com/droppable/')
    await page.getByText('Checkboxradio').click()
    const frames = page.frameLocator('.demo-frame')
    await expect(frames.getByText('3 Star').last()).toBeChecked({checked:false})
    frames.getByText('3 Star').last().check()
    await expect(frames.getByText('3 Star').last()).toBeChecked({checked:true})
})