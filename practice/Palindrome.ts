function checkPalindrome(str: String) {
    let reverse = ""
    let count = str.length

    for (let i = count - 1; i>=0; i--) {
        reverse = reverse + str.charAt(i)
    }
    if (str == reverse) {
        console.log(`${str} is a Palindrome`)
    }
    else {
        console.log("Not a Palindrome")
    }
}

checkPalindrome("madam")