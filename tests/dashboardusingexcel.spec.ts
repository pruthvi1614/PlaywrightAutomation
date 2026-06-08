import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ExcelUtils } from '../utils/ExcelUtils'
import path from 'path'

const filePath = path.join(__dirname, "../testdata/LoginData.xlsx")
const sheetName = "Login"

let excelData: any

try {
    excelData = ExcelUtils.getExcelData(filePath, sheetName)
}
catch (message) {
    console.log(message)
}

let loginPage: LoginPage
let dashboardPage: DashboardPage

for (let data of excelData) {
    test.describe(`${data.productName} Tests`, () => {
        test.beforeEach(async ({ page }) => {
            loginPage = new LoginPage(page)
            dashboardPage = new DashboardPage(page)
            await loginPage.launchURL(data.url)
            await loginPage.loginWithValidCredentials(data.username, data.password)
            await expect(loginPage.loginSuccessMessage).toBeVisible()
        })

        test(`Add ${data.productName} to cart validation`, async ({ page }) => {
            //console.log(`entered into ${data.productName}`)
            let cartCount = await dashboardPage.getCartCount()
            await dashboardPage.addProductToCartByProductName(data.productName)
            await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
            await expect(dashboardPage.cartCount).toHaveCount(cartCount + 1)
        })

        test(`View ${data.productName} details page`, async ({ page }) => {
            await dashboardPage.viewProductDetailsByProductName(data.productName)
            expect(dashboardPage.viewPageProductName).toHaveText(data.productName)
        })
    })
}