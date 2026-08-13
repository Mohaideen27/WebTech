let student = {
  sname: "miller",
  sid: 101,
  isStudying: false,
  skills: ["sql", "java", "python", "webtech"],
  address: {
    city: "chennai",
    state: "TamilNadu",
  },
  work: () => {
    console.log("Workaholic");
  },
};

// console.log(student.sname);
// console.log(student.sid);
// console.log(student.isStudying);
// console.log(student.skills);
// console.log(student.address.city);
// console.log(student.address.state);
// // console.log(student.work);
// student.work();
let employee = {
  ename: "john",
  eid: 101,
  isWorking: true,
  skills: ["sql", "java", "python", "webtech"],
  address: {
    city: "chennai",
    state: "TamilNadu",
  },
  work: () => {
    console.log("Workaholic");
  },
};

console.log(employee.ename);
console.log(employee.eid);
console.log(employee.isWorking);
console.log(employee.skills);
console.log(employee.address.city);
console.log(employee.address.state);
// console.log(student.work);
employee.work();

// how to modify the object value
student.sid = 102;

// how to add new property
student.phone = 9003820934;

// how to delete

delete student.isStudying;
console.log(student);
