// GIVEN I need a new, secure password
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
var generateBtn = document.querySelector("#generate");

//Arrays for password choices/
const lowerArr = "abcdefghijklmnopqrstuvwxyz"; //.split a string
const lowerCase = lowerArr.split(" " , 26)
console.log(lowerCase);
const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numberArr);
const upperArr = ["A", "B", "C"];
const specialArr = ["!", "@", "#", "$", "^", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//taking the answers to process a password/
function generatePassword() {
  let userAnswer = userInput ()
}



// var results [];

// User Input
//How many characters would you like your password to contain?
//Lower confirm
//nums confirm
//upperCase confirm
//special confirm
function userInput() {
  let length = prompt ("How many characters would you like your password to contain?")
  if (length < 8 || length > 128) {
    alert ("Choose a length of at least 8 characters and no more than 128 characters")
    return null
  }
  let islowerCase = confirm ("Do you want to include lowercase characters?")
  let isupperCase = confirm ("Do you want to include uppercase characters?")
  let isnumeric = confirm ("Do you want to include numbers characters?")
  let isspecialChar = confirm ("Do you want to include special characters?")
}
//Conditional
//if user chose X number of charter total
// for loop iterates X number of times

//if the user chose to add lower case characters
// randomly select some number represented by Y number of chars and pushed to the results array

//if the users chose to add uppercase chars
// randomly select some number represented by Y number of chars and pushed to the results array

//if user choses to add special char
// randomly select some number represented by Y number of chars and pushed to the results array

// results = ["a", "b", "0", "?"]

//display results onto the page

//target text area, display results


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
