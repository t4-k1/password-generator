// Assignment Code
var generateBtn = document.querySelector('#generate')

// Define characters into .split array
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numerical = '1234567890'.split('')
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('')

// Button click
generateBtn.addEventListener("click", function (event) {
  // Pick password length and make sure it is a whole number
  var passwordLength = parseInt(prompt('How long should your password be? (Between 8 and 128 characters)'))
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Make character selections  
    alert('Select at least one character type to include in your password.')
    var includeLower = confirm('Should your password include lowercase letters?')
    var includeUpper = confirm('Should your password include uppercase letters?')
    var includeNumber = confirm('Should your password include numbers?')
    var includeSpecial = confirm('Should your password include special characters?')
    
    // Check to see if one character type is selected
    if (includeLower || includeUpper || includeNumber || includeSpecial) {
      var password = generatePassword(passwordLength, includeLower, includeUpper, includeNumber, includeSpecial)
      writePassword(password)
      //Prompt to select at least one character type
    } else {
      alert('Please select at least one character type!')
    }
  } else {
    // Prompt to enter a valid number between 8 and 128
    alert('Please enter a valid number between 8 and 128!')
  }
})

// Generate password
function generatePassword(passwordLength, includeLower, includeUpper, includeNumber, includeSpecial) {
  
  //Empty array
  var selections = []
  //Concat selections into empty array
  if (includeLower) {
    selections = selections.concat(lowerChars)
  }
  if (includeUpper) {
    selections = selections.concat(upperChars)
  }
  if (includeNumber) {
    selections = selections.concat(numerical)
  }
  if (includeSpecial) {
    selections = selections.concat(special)
  }
  var password = ''
  //Select random characters from array to generate password
  for (let i = 0; i < passwordLength; i++) {
    var randomSelector = Math.floor(Math.random() * selections.length)
    password += selections[randomSelector]
}
return password
}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password")
  passwordText.value = password
}

