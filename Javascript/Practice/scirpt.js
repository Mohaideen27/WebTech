const defaultEmployees = [
  {
    id: 1,
    name: "Arun",
    age: 24,
    department: "IT",
    salary: 45000,
    skills: ["JavaScript", "HTML", "CSS"],
    active: true,
  },
  {
    id: 2,
    name: "Priya",
    age: 27,
    department: "HR",
    salary: 50000,
    skills: ["Recruitment", "Communication"],
    active: true,
  },
  {
    id: 3,
    name: "Rahul",
    age: 30,
    department: "IT",
    salary: 65000,
    skills: ["JavaScript", "React", "Node"],
    active: false,
  },
  {
    id: 4,
    name: "Sneha",
    age: 25,
    department: "Finance",
    salary: 55000,
    skills: ["Excel", "Accounting"],
    active: true,
  },
  {
    id: 5,
    name: "Vikram",
    age: 29,
    department: "IT",
    salary: 70000,
    skills: ["JavaScript", "Node", "MongoDB"],
    active: true,
  },
];

// Local Storage

let employees;
const storedEmployees = localStorage.getItem("employees");
if (storedEmployees) {
  employees = JSON.parse(storedEmployees);
} else {
  employees = structuredClone(defaultEmployees);
}

function saveEmployees() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

// DOM References
const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("search");
const departmentSelect = document.getElementById("department");
const statusSelect = document.getElementById("status");
const sortSelect = document.getElementById("sort");
const stats = document.getElementById("stats");
const form = document.getElementById("employeeForm");
const resetButton = document.getElementById("reset");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// display Employees

function displayEmployees(data) {
  employeeList.innerHTML = "";
  data.forEach((employee) => {
    const employeeElement = document.createElement("div");
    employeeElement.className = "employee";
    employeeElement.innerHTML = `
    <h3>${employee.name}</h3>
    <p>${employee.age}</p>
    <p>${employee.department}</p>
    <p>${employee.skills.join(", ")}</p>
    <p class="${employee.active ? "active" : "inactive"}">Status:${employee.active ? "Active" : "Inactive"}</p>
    <button class="view-btn" data-id="${employee.id}">View</button>
    <button class="delete-btn" data-id="${employee.id}">Delete</button>
    `;

    employeeList.appendChild(employeeElement);
  });
}

// Search + Filter + Sort

function renderEmployees() {
  let result = [...employees];
  const searchText = searchInput.value.toLowerCase().trim();
  if (searchText) {
    result = result.filter((employee) => {
      return employee.name.toLowerCase().includes(searchText);
    });
  }
  const department = departmentSelect.value;
  if (department !== "all") {
    result = result.filter((employee) => {
      return employee.department === department;
    });
  }
  const status = statusSelect.value;
  if (status !== "all") {
    result = result.filter((employee) => {
      if (status === "active") {
        return employee.active === true;
      }
      return employee.active === false;
    });
  }
  const sortBy = sortSelect.value;
  if (sortBy === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "age") {
    result.sort((a, b) => a.age - b.age);
  } else if (sortBy === "salary") {
    result.sort((a, b) => a.salary - b.salary);
  }
  displayEmployees(result);
}

// Event Listeners

searchInput.addEventListener("input", renderEmployees);
departmentSelect.addEventListener("change", renderEmployees);
statusSelect.addEventListener("change", renderEmployees);
sortSelect.addEventListener("change", renderEmployees);

// Event Delegation

employeeList.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  // Delete
  if (event.target.classList.contains("delete-btn")) {
    employees = employees.filter((employee) => employee.id !== id);
  }
  saveEmployees();
  renderEmployees();
  updateStats();

  if (event.target.classList.contains("view-btn")) {
    showEmployee(id);
  }
});

// Show Employee Modal
function showEmployee(id) {
  const employee = employees.find((employee) => employee.id === id);
  if (!employee) return;
  modalBody.innerHTML = `
  <h2>${employee.name}</h2>
  <p>Age: ${employee.age}</p>
  <p>Department:${employee.department}</p>
  <p>Salary: ${employee.salary}</p>
  <p>Skills: ${employee.skills.join(", ")}</p>
  <p> Status: ${employee.active ? "Active" : "Inactive"}</p>
  `;
  modal.style.display = "block";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const salary = Number(document.getElementById("salary").value);
  const department = document
    .getElementById("department")
    .value.split(",")
    .map((skill) => skill.trim());
  const newEmployee = {
    id: Date.now(),
    name,
    age,
    department,
    salary,
    skills,
    active: true,
  };
  employees.push(newEmployee);
  saveEmployees();
  renderEmployees();
  updateStats();
  form.reset();
});

function updateStats() {
  const total = employees.length;
  const active = employees.filter((employee) => employee.active).length;
  const inactive = employees.filter((employee) => !employee.active).length;
  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  const averageSalary = total === 0 ? 0 : totalSalary / total;
  const highestSalary =
    employees.length === 0
      ? 0
      : Math.max(...employees.map((employee) => employee.salary));
  stats.innerHTML = `
      <p>Total Employees:${total}</p>
      <p>Active Employees:${active}</p>
      <p>Inactive Employees:${inactive}</p>
      <p>Average Salary: Rs. ${averageSalary}</p>
      <p>Highest Salary: Rs. ${highestSalary}</p>
      `;
}

resetButton.addEventListener("click", () => {
  employees = structuredClone(defaultEmployees);
  saveEmployees();
  renderEmployees();
  updateStats();
});

// closure Practice

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();

// Curring Solution

function calculateSalary(salary) {
  return function (bonusPercentage) {
    return salary + (salary * bonusPercentage) / 100;
  };
}

console.log(calculateSalary(50000)(10));

// Rest Parameter Solution
function calculateTotalSalary(...salaries) {
  return salaries.reduce((total, salary) => total + salary, 0);
}

console.log(calculateTotalSalary(45000, 50000, 30000));
