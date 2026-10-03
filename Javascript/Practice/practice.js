// const employees = [
//   {
//     id: 1,
//     name: "Arun",
//     age: 24,
//     department: "IT",
//     salary: 45000,
//     skills: ["JavaScript", "HTML", "CSS"],
//     active: true,
//   },
//   {
//     id: 2,
//     name: "Priya",
//     age: 27,
//     department: "HR",
//     salary: 50000,
//     skills: ["Recruitment", "Communication"],
//     active: true,
//   },
//   {
//     id: 3,
//     name: "Rahul",
//     age: 30,
//     department: "IT",
//     salary: 65000,
//     skills: ["JavaScript", "React", "Node"],
//     active: false,
//   },
//   {
//     id: 4,
//     name: "Sneha",
//     age: 25,
//     department: "Finance",
//     salary: 55000,
//     skills: ["Excel", "Accounting"],
//     active: true,
//   },
//   {
//     id: 5,
//     name: "Vikram",
//     age: 29,
//     department: "IT",
//     salary: 70000,
//     skills: ["JavaScript", "Node", "MongoDB"],
//     active: true,
//   },
// ];
// // console.log(...employees);

// const highestSalary =
//   employees.length === 0
//     ? 0
//     : Math.max(...employees.map((employee) => employee.salary));
// // console.log(highestSalary);

// function calculateSalary(salary) {
//   return function (bonusPercentage) {
//     return salary + (salary * bonusPercentage) / 100;
//   };
// }

// // console.log(calculateSalary(50000)(10));

// function calculateTotalSalary(...salaries) {
//   return salaries.reduce((total, salary) => total + salary, 0);
// }

// // console.log(calculateTotalSalary(45000, 50000, 30000));

// // Spread Operator

// const employee1 = {
//   name: "Arun",
//   age: 24,
//   salary: 45000,
// };

// const updatedEmployee = {
//   ...employee1,
//   salary: 50000,
// };

// // console.log(updatedEmployee);
// // console.log(employee1);

// // shallow Copy

// const employee2 = {
//   name: "Arun",
//   skill: ["JS", "HTML"],
// };

// const employee3 = {
//   ...employee2,
// };

// employee2.skill.push("CSS");

// // console.log(employee3.skill);

// // Deep copy

// const employee4 = structuredClone(employee2);

// employee2.skill.push("NodeJS");
// // console.log(employee2.skill);
// // console.log(employee4.skill);

// // freeze and seal

// const user = {
//   name: "Arun",
//   age: 24,
// };

// Object.freeze(user);

// user.age = 25;
// user.job = "HR";
// // console.log(user.age);
// // console.log(user);

// const user2 = {
//   name: "Sana",
//   age: 27,
// };
// Object.seal(user2);

// user2.job = "DEVELOPER";
// user2.age = 18;
// // console.log(user2);
// // console.log(user2.age);

// function getEmployee() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (!success) {
//         resolve(employee4);
//       } else {
//         reject("Failed to load employees");
//       }
//     }, 2000);
//   });
// }

// // getEmployee()
// //   .then((data) => {
// //     console.log("Employees: ", data);
// //   })
// //   .catch((error) => console.log("Error:", error))
// //   .finally(() => {
// //     console.log("Finished");
// //   });

// // async function loadEmployees() {
// //   try {
// //     const data = await getEmployee();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// // loadEmployees();

// function getEmployeeAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Employees loaded");
//     }, 1000);
//   });
// }

// function getDepartmentAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Department loaded");
//     }, 1500);
//   });
// }

// function getStaticsAPI() {
//   return new Promise((resolve, reject) => {
//     let cond = false;
//     setTimeout(() => {
//       if (cond) {
//         resolve("Statistics loaded");
//       } else {
//         reject("failed to load");
//       }
//     }, 500);
//   });
// }

// // Promise all

// // Promise.all([getEmployeeAPI(), getDepartmentAPI(), getStaticsAPI()])
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // Promise.allSettled

// // Promise.allSettled([
// //   getEmployeeAPI(),
// //   getDepartmentAPI(),
// //   getStaticsAPI(),
// // ]).then((results) => console.log(results));

// // Promise.race()

// // Promise.race([getEmployeeAPI(), getDepartmentAPI(), getStaticsAPI()])
// //   .then((results) => console.log(results))
// //   .catch((error) => console.log(error));
// // Promise.any()
// // Promise.any([getEmployeeAPI(), getDepartmentAPI(), getStaticsAPI()])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // Date Practice

// // const date = new Date();
// // console.log(date.getFullYear());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// // console.log(date.getDay());
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // console.log(date.toISOString());
// // console.log(date.toLocaleDateString());

// // String Method Practice

// // const text = "JavaScript";

// // console.log(text.slice(0, 4));

// // console.log(text.substring(-2, 4));
// // console.log(text.slice(-6));
// // console.log(text.split(""));
// // console.log(["JS", "HTML", "CSS"].join(", "));

// // == VS ===

// // console.log(5 == "5");
// // console.log(5 === "5");

// // // for in and for of

// // const employee5 = {
// //   name: "Arun",
// //   age: 34,
// //   salary: 34000,
// //   job: "IT",
// // };

// // for (const key in employee5) {
// //   console.log(key);
// // }

// // const skills = ["JS", "HTML", "CSS"];
// // for (const element in skills) {
// //   console.log(element);
// // }

// // Destructuring Practice

// // const employee7 = {
// //   name: "Arun",
// //   age: 24,
// //   department: "IT",
// // };
// // const { name, age, department } = employee7;
// // console.log(name);
// // console.log(age);
// // console.log(department);

// // const skilll = ["js", "HTML", "CSS"];
// // const [fist, second, third] = skilll;
// // console.log(third);

// // IIFE Practice
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    if (!res.ok) {
      throw new Error("Request failed");
    }
    const data = res.json();
    console.log(data);

    const user = await data;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

getUsers();
