import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
const username = "pranga2010@gmail.com"
const password = "Qedge123"
const incorrectPassword = "Test"
const emptyPassword=""

let loginPage : LoginPage

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})


test("Valid Login Scenario",async({page})=>{
    await loginPage.loginWithValidCredentials(username,password)
    await expect(loginPage.loginSuccessMessage).toBeVisible()
})

test("Invalid Login",async({page})=>{
    await loginPage.invalidLogin(username,incorrectPassword)
    await expect(loginPage.loginErrorMessage).toHaveText("Incorrect email or password.")
})

test("Empty password validation",async({page})=>{
    await loginPage.emptyPassword(username,emptyPassword)
    await expect(loginPage.emptyPassErrorMsg).toHaveText("*Password is required")
})