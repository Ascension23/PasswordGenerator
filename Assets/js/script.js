// Assignment Code
var generateBtn = document.querySelector("#generate");
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userInputYes = ['Y', 'y']
var userInputNo = ['N', 'n']
var userChoices = []
var passwordLength = 0


function passwordPrompt() {
  //A while loop to ensure user input for password length is between 8 and 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('What is the length of desired password between 8 and 128 characters?')
    //Conditional statement to ensure proper password length
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt('You password does not meet the requirements: Enter a valid number between 8 and 128')
    }
    //Conditional statement to ensure the user fills input or does not put a symbol instead of a number

    else if (passwordLength == "" || Number.isNaN(parseInt(passwordLength))) {
      passwordLength = prompt('Enter a valid number between 8 and 128')

    }
    console.log(passwordLength)
  }

  
  var numbers = confirm('Does your password require numbers?')
  var special = confirm('Does your password require special characters?')
  var capitalization = confirm('Does your password require uppercase characters?')
  var lower = confirm('Does your password require lowercase characters?')
  
  if (numbers == false) {
    return
  } else if (numbers == true) {
    userChoices.push(numeric)
    console.log(userChoices)
  }
  
  
  if (numbers == false) {
    return
  } else if (special == true) {
    userChoices.push(symbols)
    console.log(userChoices)
  }


  if (capitalization == false) {
    return
  } else if (capitalization == true) {
    userChoices.push(upperCase)
    console.log(userChoices)
  }

  
  if (lower == false) {
    return
  } else if (lower == true) {
    userChoices.push(lowerCase)
    console.log(userChoices)
  }

}


// Math.floor Math.random

function generatePassword() {
  passwordPrompt()
  var password = []
  for (var i = 0; i < passwordLength; i++) {
    var choices = userChoices[Math.floor(Math.random() * userChoices.length)];
    password.push(choices);
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
