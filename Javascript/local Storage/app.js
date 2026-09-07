localStorage.clear();
// how to add in localStorage in JavaScript
localStorage.setItem("MyName", "Mohamed Mohaideen");
localStorage.setItem("id", "311017114048");
localStorage.setItem("skills", JSON.stringify(["HTML", "CSS", "JavaScript"]));

// how to get data from LocalStorage in JavaScript
let myName = localStorage.getItem("MyName");
console.log(myName);

let id = localStorage.getItem("id");
console.log(id);
let skills = JSON.parse(localStorage.getItem("skills"));
console.log(skills);

// how to remove data from LocalStorage in JavaScript
// localStorage.removeItem("id");

// how to clear all data from LocalStorage in JavaScript

// localStorage.clear();
