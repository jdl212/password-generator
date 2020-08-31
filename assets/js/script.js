// learn random number generation!
// convert random number to special character or  letter!
// make random generator fuction configurable!
// make random number generator accpet 8 to 128 values  Math.random();!
// relevant link https://www.w3schools.com/charsets/ref_html_ascii.asphttps://www.w3schools.com/jsref/jsref_fromcharcode.asp
// https://www.w3schools.com/charsets/ref_html_ascii.asp
/*ASCII is a 7-bit character set containing 128 characters.

It contains the numbers from 0-9, the upper and lower case English letters from A to Z, and some special characters.


algorithm
iterate over lenght of the password
each interation we genrate a random number 
each random number gets added to a result array
map over each random numb to create an ascii character
join the result array into a string
select html and replace inner text to display password

*/

// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
String.fromCharCode(65); // note turns interger into an ascii character
var specialCharacter = [33, 46];
var digits = [49, 57];
var upperCase = [65, 90];
var lowerCase = [97, 122];
var character = { specialCharacter, digits, lowerCase, upperCase };
var passwordDimension = [8, 128];
var passwordLength = 16;
var passwordRange = passwordDimension[0] + passwordLength;
var includeUpperCase = true;
var includeSpecialCharacter = true;
var includeNumber = true;
var listOfModals = ["#length", "#uppercase", "#specialcharacter", "#digits"];
var currentModal = 0;

function randomNumberBetweenTwoPoints(begin, end) {
  return Math.floor(Math.random() * (end - begin + 1) + begin);
}

function generatePassword(
  passwordLength = 0,
  includeSpecialCharacter = false,
  includeUpperCase = false,
  includeNumber = false,
  character
) {
  var passwordArray = [];

  for (let index = 0; index < passwordLength; index++) {
    var randomNumber;
    if (includeUpperCase && index === 0) {
      console.log("uppercase");
      randomNumber = randomNumberBetweenTwoPoints(
        character.upperCase[0],
        character.upperCase[1]
      );
    } else if (includeNumber && index === passwordLength - 2) {
      console.log("number");
      randomNumber = randomNumberBetweenTwoPoints(
        character.digits[0],
        character.digits[1]
      );
    } else if (includeSpecialCharacter && index === passwordLength - 1) {
      console.log("specialcharacter");
      randomNumber = randomNumberBetweenTwoPoints(
        character.specialCharacter[0],
        character.specialCharacter[1]
      );
    } else {
      console.log("lowercase");
      randomNumber = randomNumberBetweenTwoPoints(
        character.lowerCase[0],
        character.lowerCase[1]
      );
    }

    passwordArray.push(randomNumber);
  }
  return passwordArray;
}

function charcodeArrayToPassword(array) {
  return array
    .map(function (charcode) {
      return String.fromCharCode(charcode);
    })
    .join("");
}
function current() {
  return listOfModals[currentModal];
}

function reset() {
  currentModal = 0;
  includeSpecialCharacter = document.querySelector(
    "#inputspecialchar"
  ).checked = false;
  includeNumber = document.querySelector("#inputdigitchar").checked = false;
  includeUpperCase = document.querySelector("#inputupperchar").checked = false;
}

function next() {
  return listOfModals[++currentModal];
}

function update() {
  includeSpecialCharacter = document.querySelector("#inputspecialchar").checked;
  includeNumber = document.querySelector("#inputdigitchar").checked;
  includeUpperCase = document.querySelector("#inputupperchar").checked;
  passwordLength = parseInt(document.querySelector("#inputpasswordlength").value);

  let val = generatePassword(
    passwordLength,
    includeSpecialCharacter,
    includeUpperCase,
    includeNumber,
    character
  );
  console.log(val);
  val = charcodeArrayToPassword(val);
  console.log("your password is", val);
  document.querySelector("#yourpassword").textContent = val;
}
//////////////////////////////////////////////////////
///////////// play area  /////////////////////////////
console.log("hello world");

// let val = randomNumberBetweenTwoPoints(10, 1000);

// let val = generatePassword(
//   passwordLength,
//   includeSpecialCharacter,
//   includeUpperCase,
//   includeNumber,
//   character
// );
// console.log(val);
// val = charcodeArrayToPassword(val);
// console.log("your password is", val);

const generatePasswordBtn = document.querySelector("#passwordgeneraterbutton");
generatePasswordBtn.dataset.target = listOfModals[currentModal];

///////////// end play area //////////////////////////
//////////////////////////////////////////////////////

// hour
// if hour is between 6am and 12pm: good morning!
// if it is between 12pm and 6pm: good afternoon!
//otherwise: good evening!