let time = document.getElementById("time");
let date = document.getElementById("date");

setInterval(() => {
  let currentDate = new Date();
  time.innerText =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  date.innerText =
    currentDate.getDate() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear();
  //   console.log(currentDate.getDate());
  //   console.log(currentDate.getMonth());
  //   console.log(currentDate.getFullYear());
  //   console.log(currentDate.getHours());
  //   console.log(currentDate.getMinutes());
  //   console.log(currentDate.getSeconds());
}, 500);
