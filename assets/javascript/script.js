var generateBtn = document.querySelector("#generate");
var passwordForm = document.querySelector("#passwordForm");

function writePassword() {
  var passwordLength = parseInt(passwordForm.elements.passwordLength.value);

  if (passwordLength >= 8 && passwordLength <= 128) {
    var useUppercase = passwordForm.elements.uppercase.checked;
    var useLowercase = passwordForm.elements.lowercase.checked;
    var useNumbers = passwordForm.elements.numbers.checked;
    var useSpecialCharacters = passwordForm.elements.specialCharacters.checked;

    var password = generatePassword(passwordLength, useUppercase, useLowercase, useNumbers, useSpecialCharacters);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Password length must be between 8 and 128 characters.");
  }
}

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialCharacters) {
  var charset = "";

  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useNumbers) {
    charset += "0123456789";
  }
  if (useSpecialCharacters) {
    charset += "!@#$%^&*()_-+=<>?";
  }
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
