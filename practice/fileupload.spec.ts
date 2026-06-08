import { test, expect } from '@playwright/test'

const path = require('path')

test('Upload single file', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    //setInputFiles() use this method to upload single or multiple files
    await page.locator('#filesToUpload').setInputFiles("TestData/MyResults.xlsx")
    await expect(page.locator('#fileList li')).toContainText("MyResults.xlsx")
})

test('Upload multiple file upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(
        ["TestData/MyResults.xlsx", "TestData/MyFile.xlsx"])
})

test('Upload multiple file uploads using path', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    const path1 = path.join(__dirname, '..', 'TestData', 'MyResults.xlsx')
    const path2 = path.join(__dirname, '..', "TestData/MyFile.xlsx")
    const path3 = path.join(__dirname, '..', "TestData/JiraFile.csv")

    await page.locator('#filesToUpload').setInputFiles([path1, path2, path3])
    await expect(page.getByText('MyResults.xlsx')).toContainText("MyResults.xlsx")
    await expect(page.getByText('MyFile.xlsx')).toContainText("MyFile.xlsx")
    await page.waitForTimeout(3000)
})