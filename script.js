

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
  let possibility = [possibilities]
  if (userAnswer.islowerCase) {
    possibilities = possibilities.concat(lowerArr);
    userChoices.push(lowerArr);
  }

  if (userAnswer.isupperCase) {
    possibilities = possibilities.concat(upperArr)
    userChoices.push(upperArr)
  }
  if (userAnswer.isnumeric) {
    possibilities = possibilities.concat(numberArr)
    userChoices.push(numberArr)
  }
  if (userAnswer.isspecialChar) {
    possibilities = possibilities.concat(specialArr)
    userChoices.push(specialArr)
  }

  console.log(userChoices);

  //randomizes the password output based on the user's answers
  if (userAnswer) {
    for (let i = 0; i < userAnswer.length; i++) {
      finalPassword.push(
        possibilities[Math.floor(Math.random() * possibilities.length)]
      );
      finalPassword.join("");
    }
  }
  return finalPassword.join("");
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