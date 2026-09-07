let f = document.querySelector("form");
console.log(f);
f.addEventListener("submit", (e) => {
  e.preventDefault();
  let sName = document.getElementById("sName").value;
  let sRollNo = document.getElementById("sRollNo").value;
  let sPhNo = document.getElementById("sPhNo").value;
  console.log(sName);
  console.log(sRollNo);
  console.log(sPhNo);
  console.log("register done successfully");
});
