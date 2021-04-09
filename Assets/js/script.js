// Assignment Code
var generateBtn = document.querySelector("#generate");
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var userInputYes = ['Y', 'y']
var userInputNo = ['N','n']
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
    console.log (passwordLength)
  }
  var numbers = prompt('Does your password require numbers? Y for yes, N for no.')
  if (!userInputYes.includes(numbers) && !userInputNo.includes(numbers)) {
    alert('Please enter Y for yes, N for no.')
    numbers = prompt('Does your password require numbers? Y for yes, N for no.')
  } else if (numbers == userInputYes) {
    userChoices = userChoices.concat(numeric)
    
  }
  console.log(userChoices.concat(numeric))

  var special = prompt('Does your password require special characters? Y for yes, N for no.')
  if (!userInputYes.includes(special) && !userInputNo.includes(special)) {
    alert('Please enter Y for yes, N for no.')
    special = prompt('Does your password require special characters? Y for yes, N for no.')
  } else if (special == userInputYes) {
    userChoices = userChoices.concat(symbols)
    
  }
    console.log(userChoices.concat(symbols))
  
  var capitalization = prompt('Does your password require uppercase characters? Y for yes, N for no.')
  if (!userInputYes.includes(capitalization) && !userInputNo.includes(capitalization)) {
    alert('Please enter Y for yes, N for no.')
    capitalization = prompt('Does your password require uppercase characters? Y for yes, N for no.')
  } else if (capitalization == userInputYes) {
    userChoices = userChoices.concat(upperCase + lowerCase)
    
  }
  var lower = prompt('Does your password require lowercase characters? Y for yes, N for no.')
  if (!userInputYes.includes(lower) && !userInputNo.includes(lower)) {
    alert('Please enter Y for yes, N for no.')
    lower = prompt('Does your password require lowercase characters? Y for yes, N for no.')
  } else if (lower == userInputYes) {
    userChoices = userChoices.concat(lowerCase)
    
  }
  console.log(userChoices)
}



// Math.floor Math.random

function generatePassword() {
  passwordPrompt()
  // userChoices.concat(special)
  // userChoices.concat(numbers)
  // userChoices.concat(capitalization)
  console.log('Testing Password')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
