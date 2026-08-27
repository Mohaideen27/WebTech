let add = () => {
  let card = document.getElementsByClassName("card");
  let content = card[1].innerHTML;
  console.log(content);
  card[2].innerHTML = content;
  card[1].innerHTML = "";
};
let mouse = () => {
  let card = document.getElementsByClassName("card");
  card[1].style.backgroundColor = "red";
};
let out = () => {
  let card = document.getElementsByClassName("card");
  card[1].style.backgroundColor = "white";
};
let count = 0;
let move = () => {
  let content = document.getElementById("content");
  console.log(content);
  count++;
  content.innerHTML = count;
};
