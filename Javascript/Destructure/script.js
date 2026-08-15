// let student = {
//   sname: "dhoni",
//   age: 7,
//   isPlayer: true,
//   skills: ["math", "rhymes", "gk", "drawing"],
// };
// console.log(student.sname);
// console.log(student["age"]);
// let { isPlayer } = student;
// // console.log(sname);
// // console.log(age);
// console.log(isPlayer);

// // console.log(skills);

// //! Rest Parameter
// function abc(...a) {
//   console.log(a);
// //   console.log(b);
// //   console.log(c);
// }
// abc(10, 20, 30, 40, 50);

// // ! Spread Operator

// let frontend = ["html", "css", "js", "react"];
// let backend = ["node", "express", "mongodb"];
// let va = [...frontend, ...backend];
// console.log(typeof va, va);
// console.log(...va);
// Without spread operator
let ob1 = {
  obname: "pen",
};
let ob2 = {
  price: 30,
};

console.log("Without Spread Operator", { ob1, ob2 });

// ! Merge two arrays by using spread
console.log("With Spread Operator", { ...ob1, ...ob2 });

// // shallow copy
// let subjects = ["java", "c", ["node", "express"]];
// let copy = subjects;
// console.log(subjects);
// console.log(copy);
// copy.push("webtech");
// console.log(subjects);
// console.log(copy);
// // Deep Copy
// let subjects = ["java", "c", ["node", "express"]];
// let copy = [...subjects];
// console.log(subjects);
// console.log(copy);
// copy.push("webtech");
// console.log(subjects);
// console.log(copy);
