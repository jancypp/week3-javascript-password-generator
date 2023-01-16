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
const lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerArr);
const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numberArr);
const upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperArr);
const specialArr = ["!", "@", "#", "$", "^", "&", "*", "(", ")"];
console.log(specialArr);


// starter code Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//taking the answers to process a password/
function generatePassword() {
  let userAnswer = userInput()
  let userChoices = []
  let possibilities = []
  let finalPassword = []
  if (userAnswer.islowerCase) {
    possibilities = possibilities.concat(lowerArr)
    userChoices.push (randomizer (lowerArr)) 
  }
  if (userAnswer.isupperCase) {
    possibilities = possibilities.concat(upperArr)
    userChoices.push (randomizer (upperArr)) 
  }
  if (userAnswer.isnumeric) {
    possibilities = possibilities.concat(numberArr)
    userChoices.push (randomizer (numberArr)) 
  }
  if (userAnswer.isspecialChar) {
    possibilities = possibilities.concat(specialArr)
    userChoices.push (randomizer (specialArr)) 
    
  }
  console.log(userChoices);
  for (let i = 0; i < userAnswer.length; i++) {
    let possibility = [possibilities] //create new variable for a new array, randomize on other side possibilities....push possibility into result / finalPassword
    finalPassword [i] = possibility [i]
    finalPassword.join ("")
  }
  for (let i = 0; i < userChoices.length; i++) {
  finalPassword [i] = userChoices [i]}
  finalPassword.join ("")
}


function randomizer(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomPassword = arr[randomIndex];
    return randomPassword
}

// User Input - How many characters would you like your password to contain? Confirms for each character type
function userInput() {
  let length = prompt("How many characters would you like your password to contain? Please choose between 8 - 128 characters.")
  if (length < 8 || length > 128) {
    alert("Error: Choose a length of at least 8 characters and no more than 128 characters")
    return null
  }
  let islowerCase = confirm("Do you want to include lowercase characters?")
  let isupperCase = confirm("Do you want to include uppercase characters?")
  let isnumeric = confirm("Do you want to include numbers characters?")
  let isspecialChar = confirm("Do you want to include special characters?")
  if (islowerCase === false && isupperCase === false && isnumeric === false && isspecialChar === false) {
    alert("You must choose at least one character type to proceed.")
    return null
  }
  let userOptions = {
    length: length,
    islowerCase: islowerCase,
    isupperCase: isupperCase,
    isspecialChar: isspecialChar,
    isnumeric: isnumeric
  }
  return userOptions;
}


// starpasswordode Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Pseudo code
// 1. Click on button to generate password
//   -event listener - row generateBtn
// 2. User wants ability to select password criteria - userInput function
// 3. Options:
//   -uppercase - confirm row
//   -lowercase - confirm row
//   -special characters - confirm row
//   -numeric - confirm row
//   -At least one character type must be chosen - alert row
// 4.User wants to choose the length of the password - prompt row
// 5. Set parameters on password length (8-128 characters) - prompt row
// 6. Randomly select the characters based on user choices
// 7. Display results on the page