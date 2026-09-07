const employees = [
  { id: 1, name: "John", age: 28, department: "IT", salary: 50000 },
  { id: 2, name: "Priya", age: 25, department: "HR", salary: 45000 },
  { id: 3, name: "Rahul", age: 30, department: "Finance", salary: 60000 },
  { id: 4, name: "Ananya", age: 27, department: "Marketing", salary: 55000 },
  { id: 5, name: "Arun", age: 32, department: "IT", salary: 70000 },
  { id: 6, name: "Sneha", age: 26, department: "HR", salary: 48000 },
  { id: 7, name: "Vikram", age: 29, department: "Sales", salary: 52000 },
  { id: 8, name: "Divya", age: 31, department: "Finance", salary: 65000 },
  { id: 9, name: "Karthik", age: 24, department: "Sales", salary: 42000 },
  { id: 10, name: "Meena", age: 33, department: "Marketing", salary: 62000 },
];
let table = document.querySelector("table");
employees.map((employee) => {
  //   console.log(employee);
  tr = document.createElement("tr");
  tr.innerHTML = `      
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>`;
  table.append(tr);
});
let main = document.querySelector("main");
employees.map((employee) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <h2>${employee.id}</h2>
      <h2>${employee.name}</h2>
      <h2>${employee.age}</h2>
      <h2>${employee.department}</h2>
      <h2>${employee.salary}</h2
  `;
  main.append(div);
});
