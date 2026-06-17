import PromptSync from "prompt-sync";

let prompt = PromptSync()
let age:any = prompt("Enter your age: ")

if(age>=18){
    console.log(`User age is ${age} and eligible to caste vote`)
}
else{
    console.log(`User age is ${age} so not eligible to vote`)
}
