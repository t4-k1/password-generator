// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector('#generate')
var length = 8

// characters
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numbers = '1234567890'.split('')
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('')

// button click
generateBtn.addEventListener("click", function (event) {
  // var includeLower = confirm("Should your password contain lowercase letters?")
  writePassword()
  // console.log(includeLower)
})

// generate password
function generatePassword() {
// what did the user select during the prompts?
// determine how to pull from all selected character sets using length
// 
  return "password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}