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
