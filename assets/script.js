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

// define characters into .split array
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var numerical = '1234567890'.split('')
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('')

// button click
generateBtn.addEventListener("click", function (event) {
  // pick password length and make sure it is a whole number
  var passwordLength = parseInt(prompt('How long should your password be? (Between 8 and 128 characters)'));
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    // make character selections  
    alert('Select at least one character type to include in your password.');
    var includeLower = confirm('Should your password include lowercase letters?');
    var includeUpper = confirm('Should your password include uppercase letters?');
    var includeNumber = confirm('Should your password include numbers?');
    var includeSpecial = confirm('Should your password include special characters?');
    
    // check to see if one character type is selected
    if (includeLower || includeUpper || includeNumber || includeSpecial) {
      var password = generatePassword(passwordLength, includeLower, includeUpper, includeNumber, includeSpecial);
      writePassword(password);
      //prompt to select at least one character type
    } else {
      alert('Please select at least one character type!');
    }
  } else {
    // prompt to enter a valid number between 8 and 128
    alert('Please enter a valid number between 8 and 128!'); 
  }
  //
  //  automatically restart function when reaching error??
  //
});

// generate password
function generatePassword(passwordLength, includeLower, includeUpper, includeNumber, includeSpecial) {
  
  //empty array
  var selections = ''
  //concat selections into empty array
  if (includeLower) {
    selections = selections.concat(lowerChars);
  }
  if (includeUpper) {
    selections = selections.concat(upperChars);
  }
  if (includeNumber) {
    selections = selections.concat(numerical);
  }
  if (includeSpecial) {
    selections = selections.concat(special);
  }
  var password = ''
  //select random characters from array to generate password
  for (let i = 0; i < passwordLength; i++) {
    var randomSelector = Math.floor(Math.random() * selections.length)
    password += selections[randomSelector]
}
return password
}


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}