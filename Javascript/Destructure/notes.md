# Object Destructure

- Object destructuring is a feature used to extract multiple properties from an object and assign them to distinct variables using a single statement.
- for performing this we need {}, inside that all the key name we have to provide, so that we can use them as separate variables.

**_Example_**

```js
let student = {
  sname: "dhoni",
  age: 7,
  isPlayer: true,
  skills: ["math", "rhymes", "gk", "drawing"],
};
console.log(student.sname);
console.log(student["age"]);
let { isPlayer } = student;
// console.log(sname);
// console.log(age);
console.log(isPlayer);
// console.log(skills);

// output
// dhoni
// 7
// true
```

# Rest Parameter

- rest parameter allow a function to accept an indefinite number of arguments as an array.
- it is denoted by three dots(...)
- we can use this only for the last parameter.

# Spread Operator

- it allows an iterable(like an array or string) or an object to be expanded or "unpacked" into individual elements or properties.
- it is also denoted by three dots(...).

## use of spread operator

**_Merge arrays and object_**

```js
// // ! Spread Operator

let frontend = ["html", "css", "js", "react"];
let backend = ["node", "express", "mongodb"];
console.log("without spread operator", frontend);
console.log("using spread Operator", ...frontend);

let va = [...frontend, ...backend];
console.log(typeof va, va);
console.log(...va);
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
```

## Shallow copy

- when we are assigning any object or array inside any variable if we make any change in any one of them it will modify both object

```js
// shallow copy
let subjects = ["java", "c", ["node", "express"]];
let copy = subjects;
console.log(subjects);
console.log(copy);
copy.push("webtech");
console.log(subjects);
console.log(copy);
```

## Deep Copy

```js
// Deep Copy
let subjects = ["java", "c", ["node", "express"]];
let copy = [...subjects];
console.log(subjects);
console.log(copy);
copy.push("webtech");
console.log(subjects);
console.log(copy);
```
