// console.log("test");
// console.log("Hello World");
// console.log("This is the greatest internship ever!");
// const name = "pizza";
// const topping = "pineapple";
// console.log(name + " " + "pineapple");
// console.log(name, topping);
// console.log(`${name} ${topping}`);
// console.log("string" + 1);
// let num = undefined;
// console.log(Boolean(num));

// function assignment1() {
//   let prompt2 = prompt("What is your name?");
//   let prompt3 = prompt("How old are you?");
//   let prompt4 = prompt("What is your hobby?");
//   alert(
//     `Hi my name is ${prompt2} I am ${prompt3}, my favorite hobby is ${prompt4}`
//   );
// }
// setTimeout(assignment1, 2000);
// DATA TYPES AND VARIABLES
// // CONDITIONALS
//TRUTHY VALUES

//console.log(Boolean(x))

// FALSY VALUES
//UNDEFINED, NULL, NaN, 0

//CONDITIONAL OPERATORS
// ===; 1===1 IS TRUE
// ==; LOOSE EQUALS; 1==1
// LOOSE EQUALS; CHECKS IF VALUE IS
// <,>, !==(NOT EQUALS), ,=,>=
// 'aaron' === 'Aaron'
// if (this is true) {then run this}
// === is strict
// == is loose

// if ('aaron' === 'aaron') {
// console.log("hello world")
// }
// let x = 0

// if ((x === 0)){
// console.log ("hello world")
// }

// let x = 0;
// let y = 1;

// if (x === 0 && y === 1) {
// console.log("hello world");
// }

// LOGICAL OPERATORS
// || OR
// if(2 === 1 || 1 == '1'){console.log("run this")}
// && AND
// if(2 === 2 && 1 == '1'){console.log("run this")}
// ?? NULLISH

//
// if(2 != '1'){console.log("run this.")}

// ELSE; IF THE STATEMENT IS FALSE

// let v = 10
// let u = 8

// if (v === 9) {
// console.log('hello world')
// } else {
//  console.log('goodye world')
// }

// ELSE IF WILL RUN IF CONDITIONS BEFORE
// IT ARE FALSE AND SPECIFIES A NEW CONDITION

// let q = 1
// if (q === 1) {
//   console.log('hello world')
// } else if (q === 0) {
//  console.log ('goodbye world')
// } else {
//  console.log('something')
// }
// let userName = prompt( 'Enter your username')
// if (userName === 'aaron123') {
// alert("logged in!")
// } else if (userName === "jonas123") {
// alert("logged in!")
// } else {
// alert("no account found")
// }
// for (let i = 0; i < 5; i++) {
//   let randomNumber = Math.floor(Math.random() * 4);
//   if (randomNumber === 3) {
//     console.log("you win.");
//   }
//   console.log(randomNumber);
// // }
// let randomNumber = Math.floor(Math.random() * 4);
// let names = ["aaron", "collin", "liv", "derrick"];
// console.log(names[randomNumber]);

// if ("liv" === names[randomNumber]) {
//   console.log("name matches");
// }

// Guess the Number

// let userGuess = prompt("Guess a number between 1-10");

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// if (randomNumber == userGuess) {
//   alert("Correct", " attempt ", randomNumber);
// } else {
//   alert("Incorrect, answer: " + randomNumber);
// }
// DOM MANIPULATION

// console.log(document)

// const input = document.getElementById('calender')

// console.log(input)

// const submit = document.getElementsByClassName('submit')

// console.log(submit[0])

// const h1 = document.querySelector('h1')

// console.log(h1)

// //!SECTION EVENT TAGS, CLICK, RESIZE, CHANGE, ETC.
// // event listeners take in types of events and respond to them

// submit[0].addEventListener('click', function(){
//     console.log('hello world')
//     h1.textContent = `You have reserved for ${input.value}`
// })
