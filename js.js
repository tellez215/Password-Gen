// Assignment Code
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "123456789";
var specialChar = "!@#$%^&*()_+=-{{}[]:;";
var allChar = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

let pwdLength = prompt(
    "How long would you like your password to be? between 8-128.");
if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Please enter a number between 8-128.");
} else {
    let lowerCase = confirm("would you like to use lowercase characters?");
    if (lowerCase) {
        allChar += lowercaseChar
    };
    let upperCase = confirm("would you like to use uppercase characters?");
    if (upperCase) {
        allChar += uppercaseChar
    };
    let
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);