// ! 1.How to target Element

// ? target element by id

let logo = document.getElementById("logo");
console.log(logo);

let about = document.getElementById("about");
console.log(about);

// ? targetting element by tagname

let tag = document.getElementsByTagName("li");
console.log(tag);

// let contect = lists[2]
// console.log(contect);

// let nav = getElementsByTagName("nav");
// console.log(nav[0]);

// let login = getElementsByTagName("bitton")
// console.log(login[0]);

// ? targetting by class

let cards = document.getElementsByClassName("card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
cards[2].innerHTML = `<h2>i am card3</h2>
                        <p>how are you</p>
                        <button>know more</button>`;

// console.log(nav[0].innerText);
// console.log(nav[0].innerHTML);

// ? 2.how to apply css

let section = document.getElementsByTagName("section");
console.log(section);

section[0].style.height = "200px";
section[0].style.backgroundColor = "red";
section[0].style.display = "flex";
section[0].style.justifyContent = "center";
section[0].style.alignItems = "center";

// ? 3. how to write content inside element

let para1 = document.getElementById("para1");
console.log(para1);

para1.innerText = "how are you";
para1.innerText = "i am fine";

// targetting by selector
let firstCard = document.querySelector(".card");
console.log(firstCard);
let p1 = document.querySelector("#para1");
console.log(p1);
let navbar = document.querySelector("nav");
console.log(navbar);
let home = document.querySelector("li");
console.log(home);

// querySelectorAll()
let unorderlists = document.querySelectorAll("li");
console.log(unorderlists);
let allCards = document.querySelectorAll(".card");
console.log(allCards);

// ?4.how to add / remove class

// ? 5. how to creat element
