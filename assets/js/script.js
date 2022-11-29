// Define variables for password

var lowCaseChar = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z").split(',');
var uppCaseChar = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z").split(',');
var numberChar = ("1,2,3,4,5,6,7,8,9,0").split(',');
var specChar = ("~,!,@,#,$,%,^,&,*,(,),-,_,=,+,/,?,;,:").split(',');

// Function to prompt user for which type of characters they want in their generated password
// Fail-safe to ensure that desired password length is atleast 8 characters and no more than 128 characters
// Fail-safe to ensure that input for character length is a number/converted to a number
// Fail-safe to ensure that atleast one type of character is selected

function passCriteria() {
  var passLength = parseInt(prompt("How long in characters would you like your password to be?"));
  
  if (Number.isNaN(passLength)) {
    alert("Please enter a number to indicate how long the password should be");
  };

  if (passLength < 8) {
    alert("Password must be atleast 8 characters in length.");
  };

  if (passLength > 128) {
    alert("Password cannot be more than 128 characters in length");
  };

  var lowCaseOption = confirm("Would you like your password to contain lower case letters?");
  var uppCaseOption = confirm("Would you like your password to contain upper case letters?");
  var numberOption = confirm("Would you like your passowrd to contain numbers?");
  var specCharOption = confirm("Would you like your password to contain special characters?");

  if (
  lowCaseOption === false && 
  uppCaseOption === false && 
  numberOption === false && 
  specCharOption === false ) {
  alert("Password must contain atleast one type of character!");
  };


  var passDetails = {
    passLength: passLength,
    lowCaseOption: lowCaseOption,
    uppCaseOption: uppCaseOption,
    numberOption: numberOption,
    specCharOption: specCharOption,
  };



  function shufflearray(arraytoshuffle) {
    for (i = arraytoshuffle.length-1; i>0; i--) {
      var randPos = Math.floor(Math.random() * (i+1));
      var temp = arraytoshuffle[i];

      arraytoshuffle[i] = arraytoshuffle[randPos];
      arraytoshuffle[randPos] = temp;
    }
    return arraytoshuffle;
  }

  if (passDetails.lowCaseOption) {
    var randLowCaseChar = shufflearray(lowCaseChar);
    console.log(randLowCaseChar);
  };
  
  if (passDetails.uppCaseOption) {
    var randUppCaseChar = shufflearray(uppCaseChar);
    console.log(randUppCaseChar);
  };

  if (passDetails.numberOption) {
    var randNumberChar = shufflearray(numberChar);
    console.log(randNumberChar);
  };

  if (passDetails.specCharOption) {
    var randSpecCaseChar = shufflearray(specChar);
    console.log(randSpecCaseChar);
  };

  
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passCriteria);






















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
