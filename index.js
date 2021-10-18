"use strict";

// 1 Exercise

// function oddOrEven(num) {
//   if (typeof num !== "number" || isNaN(num)) {
//     console.log(NaN);
//   } else {
//     if (num % 2 === 0) {
//       return "Even";
//     }
//     if (num % 2 === 1) {
//       return "Odd";
//     }
//   }
// }
// oddOrEven(1);

//2 Exercise

// function newString(string) {
// let loopedString = "";
//   for (let i = 0; i < string.length; i++) {
//     loopedString += string[i].repeat([i]).concat("-");
//   }
//   return loopedString;
// }
// newString("Jonas");

//3 Exercise
// const arr = [1, "a", "b", 2, 3];

// function filter(arr, value) {
//   const newArr = arr.filter((item) => {
//     if (typeof item === "string" || typeof item === "number") {
//       return typeof item === value;
//     } else {
//       return null;
//     }
//   });
//   return newArr;
// }
//4 Exercise

// const arr = ["10", "5", "0"];
// //Output [10, 5, 0]
// function reverseValue(arr) {
//   const newArr = [];
//   arr.map((value) => {
//     return newArr.push(Number(value));
//   });
//   return newArr;
// }

// 5 Exercise
// const arr = [
//   { name: "Jon", age: 15 },
//   { name: "Marry", age: 12 },
// ];
// // //const arr = [ { name: ‘Jon’, age: 15 }, { name: ‘Marry’, age: 12 } ];
// //pluck(arr, ‘age’);
// // result: [15, 12]
// function pluck(arr, key) {
//   const pluckedValue = [];
//   arr.find((singleItem) => {
//     Object.entries(singleItem).reduce((result, arrItem) => {
//       if (arrItem[0] === key) {
//         return pluckedValue.push(arrItem[1]);
//       }
//     }, []);
//   });
//   return pluckedValue;
// }

//6 Exercise
// const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// const input = ["Dog", "Toulouse", "Cat", "Pilgrim"];
// // output = ["Dog", "Cat"]
// function removeGeese(geese, input) {
//   const newArr = input.filter((item) => !geese.includes(item));
//   return newArr;
// }
// removeGeese(geese, input);

//Global variables

const submitBtn = document.querySelector("button");
const passwordInput = document.querySelector("#password");
const serviceInput = document.querySelector("#service");
const passwordDiv = document.createElement("div");
let generatedPassword = document.createElement("h2");
const form = document.querySelector(".main__form");
//Appending items

form.append(passwordDiv);
passwordDiv.append(generatedPassword);
//Task info
// Sequence for generated password:
// - Last character of the service name
// - Character of service at index of vowels count of service (1-based, if no vowels, take first character)
// - Full ‘Basic’ password-
// Number of non-vowel characters of service
// - Service name first character
// Example for testing:passGenerator('password', 'netflix') // result: ‘xepassword5n
function createPassword() {
  generatedPassword.innerHTML = null;
  //Creating values
  const passwordInputValue = passwordInput.value;
  const serviceInputValue = serviceInput.value;
  const revVowels = /^[aeiou]$/i;
  const revNonVowels = /^[^aeiou]$/i;
  const serviceChars = serviceInputValue.split("");
  const error = document.createElement("h2");
  error.textContent = "Failed to input Password or Service";
  let index = 0;
  let password = [];
  //Logic

  if (serviceInputValue === "" || passwordInputValue === "") {
    error.remove();
    form.append(error);
  }
  if (serviceInputValue !== "" && passwordInputValue !== "") {
    error.textContent = null;
    error.remove();
    password.push(serviceChars.slice().pop());
    serviceChars.forEach((char) => {
      if (revVowels.test(char)) {
        index++;
      }
    });
    password.push(serviceChars[index - 1]);
    form.append(error);
    password.push(passwordInputValue);
    index = 0;
    serviceChars.forEach((char) => {
      if (revNonVowels.test(char)) {
        index++;
      }
    });
    password.push(index);
    password.push(serviceChars.slice().shift());
    generatedPassword.textContent = `Generated Password: ${password.join("")}`;
  }
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  createPassword();
});
