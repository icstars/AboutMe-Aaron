console.log("test");
console.log("Hello World");
console.log("This is the greatest internship ever!");
const name = "pizza";
const topping = "pineapple";
console.log(name + " " + "pineapple");
console.log(name, topping);
console.log(`${name} ${topping}`);
console.log("string" + 1);
let num = undefined;
console.log(Boolean(num));

function assignment1() {
  let prompt2 = prompt("What is your name?");
  let prompt3 = prompt("How old are you?");
  let prompt4 = prompt("What is your hobby?");
  alert(
    `Hi my name is ${prompt2} I am ${prompt3}, my favorite hobby is ${prompt4}`
  );
}
setTimeout(assignment1, 2000);
