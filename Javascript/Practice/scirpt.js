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
