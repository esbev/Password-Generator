// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCharChoices = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacterArray = ["!","\"","\#","\$","%","\&","\'","\(","\)","*","+","\,","-",".","/",":",";","<","=",">","?","@","\[","\\","\]","^","_","`","{","|","}","~"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var containsUppers;
var containsLowers;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  var passwordOptions = createPasswordOptions();
  for (i = 0; i < passwordLength; i++) {
    var tempRandomNumber = Math.floor(Math.random() * passwordCharChoices.length);
    var tempPasswordCharacter = passwordCharChoices[tempRandomNumber];
    password.concat(tempPasswordCharacter);
  }

};

function createPasswordOptions () {
  var passwordLength = createPasswordLength();
  
  var containsSpecialCharacters = confirm("Click OK to confirm including special characters.");
  //concact special characters to password choices
  concatSpecials();
  
  var containsUppers = confirm("Click OK to confirm including uppercase characters. ");
  //concact uppercase alphabet to password choices
  concatUppers();
  
  var containsLowers = confirm("Click OK to confirm including lowercase characters. ");
  //concact lowercase alphabet to password choices
  concatLowers();
  alert("Include: \n" + "specials? " + containsSpecialCharacters + "\n uppers? " + containsUppers + "\n lowers? " + containsLowers);
};

function createPasswordLength () {
  passwordLength = prompt("How long would you like the length of your password to be? \n(Must be 8 - 128 characters in length)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, password length must be 10-128 characters in length");
    return null;
  } else {
    alert("You're password length is " + passwordLength);
  };
};

function concatSpecials() {
  var tempSpecialCharacter;
  if (containsSpecialCharacters) {
    for (i = 0; i < specialCharacterArray.length; i++) {
      tempSpecialCharacter = specialCharacterArray[i];
      passwordCharChoices.concat(tempSpecialCharacter);
    }
  }
};

function concatUppers() {
  var tempUpperCharacter;
  if (containsUppers == true) {
    for (i = 0; i < upperCaseArray.length; i++) {
      tempUpperCharacter = upperCaseArray[i];
      passwordCharChoices.concat(tempUpperCharacter);
    }
  }
};

function concatLowers() {
  var tempLowerCharacter;
  if (containsLowers == true) {
    for (i = 0; i < lowerCaseArray.length; i++) {
      tempLowerCharacter = lowerCaseArray[i];
      passwordCharChoices.concat(tempLowerCharacter);
    }
  }
};

createPasswordOptions();
console.log(passwordCharChoices);

//var specialCharacterList = [!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~];

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


