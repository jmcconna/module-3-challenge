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

  //Include Lowercase?
  var includeLowercase = window.confirm("Include lowercase characters in your password?", {okText: "Yes", cancelText: "No"});
  console.log("The value for includeLowercase is: "+includeLowercase )

  //Include Uppercase?
  var includeUppercase = window.confirm("Include UPPERCASE characters in your password?");

  //Include numbers?
  var includeNumbers = window.confirm("Include numbers in your password?");

  //Include special characters?
  var includeSpecial = window.confirm("Include special characters in your password?");

  //Create an array of all acceptable characters

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lowercaseCharacters)
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(uppercaseCharacters)
  var numericalCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(numericalCharacters)
  var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","?","/"];
  console.log(specialCharacters)

  
  
}