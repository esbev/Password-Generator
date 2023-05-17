// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordCharacters = "";
var numbers = "0123456789";
var specials = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var passwordLength;
let password = "";

function writePassword() {
  //clears the password and passwordCharacters so the function can run again without combining previous password and password options
  password = "";
  passwordCharacters = "";
  //checks to make sure passwordCharacters is empty before generating a new password
  if (passwordCharacters == "") {
    let password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
};

//creates a random password
function generatePassword() {
  createPasswordOptions();
  var temp;
  for (i = 0; i < passwordLength; i++) {
    temp = Math.floor(Math.random() * passwordCharacters.length);
    password = password + (passwordCharacters.substr(temp,1));
  }
  return password;
};

//accepts user input to create custom options for a password
function createPasswordOptions () {
  passwordLength = prompt("How long would you like the length of your password to be? \n(Must be 8 - 128 characters in length)");
  //validates user input
  if (!passwordLength) {
    return;
  }
  if (passwordLength < 8) {
    alert("Not Enough, password length must be 8-128 characters in length");
    writePassword();
    return;
  } 
  if (passwordLength > 128) {
    alert("Too many, password length must be 8-128 characters in length");
    writePassword();
    return;
  }
  if (isNaN(passwordLength)) {
    alert("Please enter a number from 8-128.")
    writePassword();
    return;
  }

  //add special characters for password choices
  var isNumbers = confirm("Click OK to include numbers.");
  if (isNumbers) {
      passwordCharacters = passwordCharacters + numbers;
  }

  //add special characters for password choices
  var isSpecial = confirm("Click OK to include special characters.");
  if (isSpecial) {
      passwordCharacters = passwordCharacters + specials;
  }
  
  //add uppercase alphabet for password choices
  var isUpper = confirm("Click OK to include uppercase characters. ");
  if (isUpper) {
      passwordCharacters = passwordCharacters + uppers;
  }

  //add lowercase alphabet for password choices
  var isLower = confirm("Click OK to include lowercase characters. ");
  if (isLower) {
      passwordCharacters = passwordCharacters + lowers;
  }
  //if no options are chosen then all options are chosen by default
  if (!isNumbers && !isSpecial && !isUpper && !isLower) {
    alert("You chose no criteria. \nBy default all characters are available for your password.")
    passwordCharacters = passwordCharacters + numbers;
    passwordCharacters = passwordCharacters + specials;
    passwordCharacters = passwordCharacters + uppers;
    passwordCharacters = passwordCharacters + lowers;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


