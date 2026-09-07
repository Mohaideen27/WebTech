let players = ["rohit", "gill", "virat", "iyer", "rahul", "jadeja", "bumrah"];
let ol = document.querySelector("ol");
players.map((player) => {
  li = document.createElement("li");
  li.innerText = player;
  ol.append(li);
});
