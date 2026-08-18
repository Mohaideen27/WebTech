const employees = [
  {
    id: 1,
    name: "Arun",
    age: 28,
    department: "IT",
    salary: 60000,
    experience: 4,
    skills: ["JavaScript", "React"],
    isActive: true,
  },
  {
    id: 2,
    name: "Priya",
    age: 32,
    department: "HR",
    salary: 55000,
    experience: 7,
    skills: ["Recruitment", "Communication"],
    isActive: true,
  },
  {
    id: 3,
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["JavaScript", "Node.js"],
    isActive: false,
  },
  {
    id: 4,
    name: "Sneha",
    age: 30,
    department: "Finance",
    salary: 70000,
    experience: 6,
    skills: ["Excel", "Accounting"],
    isActive: true,
  },
  {
    id: 5,
    name: "Vikram",
    age: 35,
    department: "IT",
    salary: 90000,
    experience: 10,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    isActive: true,
  },
  {
    id: 6,
    name: "Divya",
    age: 27,
    department: "Marketing",
    salary: 50000,
    experience: 3,
    skills: ["SEO", "Content Writing"],
    isActive: true,
  },
  {
    id: 7,
    name: "Karthik",
    age: 29,
    department: "Finance",
    salary: 65000,
    experience: 5,
    skills: ["Excel", "Accounting", "SQL"],
    isActive: false,
  },
  {
    id: 8,
    name: "Anjali",
    age: 24,
    department: "IT",
    salary: 40000,
    experience: 1,
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true,
  },
  {
    id: 9,
    name: "Suresh",
    age: 38,
    department: "HR",
    salary: 80000,
    experience: 12,
    skills: ["Recruitment", "Management"],
    isActive: true,
  },
  {
    id: 10,
    name: "Meena",
    age: 31,
    department: "Marketing",
    salary: 58000,
    experience: 8,
    skills: ["SEO", "Social Media", "Content Writing"],
    isActive: false,
  },
];

let empName = (employee) => {
  return employee.map((emp) => {
    return emp.name;
  });
};
console.log(empName(employees));
let salaryGT60k = employees.filter((emp) => {
  return emp.salary > 60000;
});
// console.log(salaryGT60k);
console.log("high paid employee", empName(salaryGT60k));
let IT = employees
  .filter((emp) => {
    return emp.department == "IT";
  })
  .map((emp) => {
    return emp.name;
  });
console.log("employee working in IT", IT);

let totalSal = employees.reduce((acc, emp) => {
  console.log(emp.salary);

  return acc + emp.salary;
}, 0);
console.log("totalSal", totalSal);

let avgSal = totalSal / employees.length;
console.log("count", employees.length);
console.log("avgSal", avgSal);

let activeEmp = employees
  .filter((emp) => {
    return emp.isActive;
  })
  .map((emp) => {
    return emp.name;
  });

console.log("activeEmp", activeEmp);

let emp7 = employees.filter((emp) => {
  return emp.id == 7;
});
console.log("employee with id 7", emp7);

let highest = employees
  .map((emp) => {
    return emp.salary;
  })
  .sort((a, b) => {
    return b - a;
  })[0];
console.log("highest", highest);
