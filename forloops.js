// FOR LOOP
// initializer
// condition

// const arr = [1,2,3]
//          // [0,1,2]
// console.log(arr[2])

// for (let initializer = 0; initializer < arr.length; initializer++) {
//     console.log(arr[initializer])

//     // FUNCTIONS
//     function iterateThroughArray(arr){
//         for (let initializer = 0; initializer < arr.length; initializer++) {
//             console.log(arr[initializer])
//         }
//     }

//     iterateThroughArray(array3)

//     function sum1(num1, num2) {
//         console.log(num1 + num2)
//     }
function iterateThroughTeam(name) {
  let team = ["Lucycan", "Collin", "Mark", "Cortez"];
  team.push(name);
  return team;
}

let nm = iterateThroughTeam("1");
console.log(nm);

for (let i = 0; i < nm.length; i++) {
  console.log(nm[i]);
}
