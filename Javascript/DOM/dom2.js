let cont = document.getElementById("container");
console.log(cont.classList);
cont.classList.remove("dark");
cont.classList.add("green");
console.log(cont.classList);

let para = document.createElement("p");
para.innerText = "I am paragraph from js";

cont.append(para);
cont.prepend(para);
cont.before(para);
cont.after(para);

let li = document.createElement("li");
li.innerText = "html";
let ol = document.querySelector("ol");
ol.prepend(li);
