// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharacters = "0123456789";
var specials = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var passwordLength;
var password = "";

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

function generatePassword() {
  createPasswordOptions();
  var temp;
  for (i = 0; i < passwordLength; i++) {
    temp = Math.floor(Math.random() * passwordCharacters.length);
    password = password.concat(passwordCharacters.substr(temp,1));
  }
};

function createPasswordOptions () {
  passwordLength = prompt("How long would you like the length of your password to be? \n(Must be 8 - 128 characters in length)");
  if (passwordLength < 8) {
    alert("Not Enough, password length must be 8-128 characters in length");
    writePassword();
    return;
  } else if (passwordLength > 128) {
    alert("Too many, password length must be 8-128 characters in length");
    writePassword();
    return;
  } else if (isNaN(passwordLength)) {
    alert("Please enter a number from 8-128.")
    writePassword();
    return;
  }

  //concat special characters to password choices
  var containsSpecialCharacters = confirm("Click OK to include special characters.");
  if (containsSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specials);
  }
  
  //concat uppercase alphabet to password choices
  var containsUppers = confirm("Click OK to include uppercase characters. ");
  if (containsUppers) {
      passwordCharacters = passwordCharacters.concat(uppers);
  }

  //concat lowercase alphabet to password choices
  var containsLowers = confirm("Click OK to include lowercase characters. ");
  if (containsLowers) {
      passwordCharacters = passwordCharacters.concat(lowers);
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


