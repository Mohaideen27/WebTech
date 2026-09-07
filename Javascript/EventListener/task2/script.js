let form =ta document.querySelector("form");
let ble = document.querySelector("table");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let eId = document.getElementById("eId").value;
  let eName = document.getElementById("eName").value;
  let eDept = document.getElementById("eDept").value;
  let eSal = document.getElementById("eSalary").value;

  console.log({ eId, eName, eDept, eSal });
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${eName}</td>
    <td>${eId}</td>
    <td>${eDept}</td>
    <td>${eSal}</td>`;
  table.append(tr);
  console.log("employee added");
});
