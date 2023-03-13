// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("writePassword has been called")
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Prompt user for inputs

  //Ask user for the Password length
  var passwordLength = window.prompt("How long would you like your password to be?", "Enter a number of characters between 8 and 128");
  console.log("PW length is: "+passwordLength)
  //This function will check the password length, and re-prompt the user if neccessary
  function checkPasswordLength () {
  if (passwordLength <=128 && passwordLength >= 8) {
    console.log("PW length is: "+passwordLength)
    console.log("PW is shorter than 129: "+(passwordLength <=128))
    console.log("PW is longer than 7: "+(passwordLength >=8))
  }
  else {
    passwordLength = window.prompt("Try again. How long would you like your password to be?", "Enter a number of characters between 8 and 128");
    console.log("PW length is: "+passwordLength)
    console.log("PW is shorter than 129: "+(passwordLength <=128))
    console.log("PW is longer than 7: "+(passwordLength >=8))
    checkPasswordLength();
  }
  }

  //Call the check password length function for the first time
  checkPasswordLength();

  //Booleans for including each type of character
  var includeLowercase;
  var includeUppercase;
  var includeNumbers;
  var includeSpecial;

  //Function to pick characters to include in the password
  function pickCharacters() {
    //Include Lowercase?
    includeLowercase = window.confirm("Include lowercase characters in your password?");
    console.log("The value for includeLowercase is: "+includeLowercase )

    //Include Uppercase?
    includeUppercase = window.confirm("Include UPPERCASE characters in your password?");

    //Include numbers?
    includeNumbers = window.confirm("Include numbers in your password?");

    //Include special characters?
    includeSpecial = window.confirm("Include special characters in your password?");
  }

  //Call pick characters for first timeS
  pickCharacters();

  //Check if they at least chose 1 type of character
  trollCheck: if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    if (window.confirm("You must include at least one type of characters. Start over?"))
    {pickCharacters();}
    else {return "You shall not password!"}
  }
  else {break trollCheck;}


  //Create an array of all acceptable characters
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  //console.log(lowercaseCharacters)
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //console.log(uppercaseCharacters)
  var numericalCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //console.log(numericalCharacters)
  var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","?","/"];
  //console.log(specialCharacters)

  var acceptableChars = [];
  if (includeLowercase) {
    acceptableChars = acceptableChars.concat(lowercaseCharacters);
    console.log("Acceptable characters include: "+acceptableChars)
  }
  if (includeUppercase) {
    acceptableChars = acceptableChars.concat(uppercaseCharacters);
    console.log("Acceptable characters include: "+acceptableChars)
  }
  if (includeNumbers) {
    acceptableChars = acceptableChars.concat(numericalCharacters);
    console.log("Acceptable characters include: "+acceptableChars)
  }
  if (includeSpecial) {
    acceptableChars = acceptableChars.concat(specialCharacters);
    console.log("Acceptable characters include: "+acceptableChars)
  }
  
  //Create an empty string for a password
  password = "";
  //randomly select characters from the acceptable character array to build password
  for (let x = 0; x < passwordLength; x++) {
    //pick one random character from the acceptable character array
    var indexOfChar = Math.floor(Math.random()*acceptableChars.length);
    //append that random character to the password string
    password = password +acceptableChars[indexOfChar];
  }
  console.log("The password is: "+password)
  console.log("The password type is: "+password.type)
  return password;

}