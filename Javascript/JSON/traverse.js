let a = {
  name: "Miller",
  Age: 20,
  isEmp: true,
};

console.log(a);
let b = JSON.stringify(a);
console.log(typeof b, b);
let c = JSON.parse(b);
console.log(typeof c,c)

// let players = [
//   {
//     name: "virat",
//     jerseyNo: 18,
//   },
//   {
//     name: "Rohit",
//     jerseyNo: 45,
//   },
//   {
//     name: "Dhoni",
//     jerseyNo: 7,
//   },
//   {
//     name: "Dinesh Karthick",
//     jerseyNo: 19,
//   },
// ];

// players.map((ele) => {
//   console.log(ele);
// });
// players.map((player) => {
//   console.log(player.name);
// });
// let sum = 0;
// let count = 0;
// players.map((player) => {
//   console.log(player.jerseyNo);
//   sum = sum + player.jerseyNo;
// });
// console.log("players.length", players.length);
// console.log(sum / players.length);

// let totalAge = players.reduce((acc, players) => {
//   return acc + players.jerseyNo;
// }, 0);
// let avgAge = totalAge / players.length;
// console.log(totalAge);
// console.log(avgAge);
// players.map((player) => {
//   console.log(player.jerseyNo);
// });
