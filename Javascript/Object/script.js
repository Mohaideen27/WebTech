// let student = {
//   sname: "miller",
//   sid: 101,
//   isStudying: false,
//   skills: ["sql", "java", "python", "webtech"],
//   address: {
//     city: "chennai",
//     state: "TamilNadu",
//   },
//   work: () => {
//     console.log("Workaholic");
//   },
// };

// console.log(student.sname);
// console.log(student.sid);
// console.log(student.isStudying);
// console.log(student.skills);
// console.log(student.address.city);
// console.log(student.address.state);
// // console.log(student.work);
// student.work();
// let employee = {
//   ename: "john",
//   eid: 101,
//   isWorking: true,
//   skills: ["sql", "java", "python", "webtech"],
//   address: {
//     city: "chennai",
//     state: "TamilNadu",
//   },
//   work: () => {
//     console.log("Workaholic");
//   },
// };

// console.log(employee.ename);
// console.log(employee.eid);
// console.log(employee.isWorking);
// console.log(employee.skills);
// console.log(employee.address.city);
// console.log(employee.address.state);
// // console.log(student.work);
// employee.work();

// // how to modify the object value
// student.sid = 102;

// // how to add new property
// student.phone = 9003820934;

// // how to delete

// delete student.isStudying;
// console.log(student);

let marker = {
  brand: "camlin",
  price: 50,
  color: "blue",
  canWrite: true,
};
// console.log(marker);

// // Object.keys()
// let keys = Object.keys(marker);
// console.log(keys);

// // Object.values(marker)
// let values = Object.values(marker);
// console.log(values);
// // Object.entries()
// let entries = Object.entries(marker);
// console.log(entries);
// let ob1 = {
//   obName: "laptop",
//   price: "65000",
//   color: "black",
// };
// console.log("before freeze");
// console.log(ob1);
// Object.freeze(ob1);
// // Object.freeze(ob1)
// ob1.color = "blue"; // We cant modify
// ob1.ram = 8; // we cant add
// delete ob1.color; // we cant delete
// console.log("after freeze");
// console.log(ob1);
// console.log(`Object.isFrozen(marker):`, Object.isFrozen(marker));
// console.log(`Object.isFrozen(ob1):`, Object.isFrozen(ob1));

Ob2 = {
  Name: "projector",
  brand: "Epson",
  price: 70000,
};
console.log("Before seal");
console.log(Ob2);
Object.seal(Ob2);
console.log("After seal");
Ob2.roomNo = 402; //We cant add
delete Ob2.price; //We cant delete
Ob2.price = 65000; // We can modify
console.log(Ob2);

console.log('Object.isSealed(Ob2)', Object.isSealed(Ob2))