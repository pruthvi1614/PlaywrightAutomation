import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import * as allure from "allure-js-commons";

let url = "https://rahulshettyacademy.com/client"
const username = "raj.raj123@gmail.com"
const password = "Test@123"
const productName = "ADIDAS ORIGINAL"

let loginPage: LoginPage
let dashboardPage: DashboardPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginWithValidCredentials(username, password)
    await expect(loginPage.loginSuccessMessage).toBeVisible()
})

test("Add product to cart validation", { tag: '@smoke' }, async ({ page }) => {
    await allure.feature("Cart");
    await allure.story("Add Product");
    let cartCount = await dashboardPage.getCartCount()
    await dashboardPage.addProductToCartByProductName(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText("Product Added To Cart")
    await expect(dashboardPage.cartCount).toHaveCount(cartCount + 1)
    console.log("--Product to cart validation--")
})

test("@smoke View product details page", async ({ page }) => {
    await allure.feature("Product");
    await allure.story("View Details");
    await dashboardPage.viewProductDetailsByProductName(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
    console.log("--View product page validation--")
})
