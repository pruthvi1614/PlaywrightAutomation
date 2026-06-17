import { test, expect } from '@playwright/test'

test("test case 1", async({page})=>{
    console.log("ACTUAL Test 1")
})

test("test case 2", async({page})=>{
    console.log("ACTUAL Test 2")
})

test("test case 3", async({page})=>{
    console.log("ACTUAL Test 3")
})

test.beforeAll("Before All", async()=>{
    console.log("===Before all===")
})

test.afterAll("After All", async()=>{
    console.log("===After all===")
})

test.beforeEach("Before Each", async()=>{
    console.log("***Before each***")
})

test.afterEach("After Each", async()=>{
    console.log("***After each***")
})