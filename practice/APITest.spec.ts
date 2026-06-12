import { test, expect, request } from '@playwright/test'
import { faker } from '@faker-js/faker'

const getURL = "https://gorest.co.in/public/v2/users"
const postURL = "https://rahulshettyacademy.com/api/ecom/auth/login"
const putURL = "https://gorest.co.in/public/v2/users/8502014"
const postURLGoRest = "https://gorest.co.in/public/v2/users"


const postPayload = { userEmail: "raj.raj123@gmail.com", userPassword: "Test@123" }
const putPayload = {
    "name": "Pruthvi raj",
    "email": "Prussyey_ab@b.test",
    "status": "active"
}

const postPayloadGorest = {
    "name": faker.person.fullName(),
    "email": faker.internet.email(),
    "status": "inactive",
    "gender": "male"
}

test("GET API method", async () => {
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get(getURL)
    const jsonResponseData = await getResponse.json()
    // console.log(jsonResponseData)
    console.log("Status: " + getResponse.status())
    await expect(getResponse.status()).toBe(200)
    console.log(await jsonResponseData[0].name)
})

test("Post API method", async () => {
    const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURL, { data: postPayload })
    expect(await postResponse.status()).toBe(200)
    const jsonPostResponse = await postResponse.json()
    console.log(jsonPostResponse)
    expect(jsonPostResponse.message).toContain("Login Successfully")
})

test("POST API method for Gorest", async () => {
    const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURLGoRest, {
        data: postPayloadGorest,
        headers: { 'Authorization': 'Bearer e7d78c99d4f4f744bbcd68ac1d00f306b9d8bf3c6bf564d6e00d63c6b0242ad5' }
    })
    const postResponseData = await postResponse.json()
    console.log(postResponseData)
})

test("PUT API method", async () => {
    const apiContext = await request.newContext()
    const putResponse = await apiContext.put(putURL, {
        data: putPayload,
        headers: { 'Authorization': 'Bearer e7d78c99d4f4f744bbcd68ac1d00f306b9d8bf3c6bf564d6e00d63c6b0242ad5' }
    })
    expect(putResponse.status()).toBe(200)
    const putResponseData = await putResponse.json()
    console.log(putResponseData)

})
