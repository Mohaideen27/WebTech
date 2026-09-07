let form = document.querySelector("form");
let result = document.getElementById("result");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  console.log(num1);
  console.log(num2);

  result.innerText = `The sum of ${num1} and ${num2} is ${parseFloat(num1) + parseFloat(num2)}`;
});
