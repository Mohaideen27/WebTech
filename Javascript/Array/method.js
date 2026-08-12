// let arr1=[1,2,3,4,5,6]
// arr1.splice(1,2)
// console.log(arr1);
// let arr2=[1,2,3,4,5,6]
// arr2.splice(2,2,700)
// console.log(arr2);
// let arr3=[1,2,3,4,5,6]
// arr3.splice(2,0,700)
// console.log(arr3);
// let arr = [10, 20, 30, 40];
// arr.map((ele, index, array) => {
//   console.log(ele, index,array);
// });
// let a = [10, 30, "hello", true, [40, 50]];
// for (let j of a) {
//   console.log(j);
// }
// let a = [10, 20, 30];
// a.push(40);
// console.log(a);
// let a = [20, 30, 40, 50, 60];
// a.pop();
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(10);
// console.log(a);
// let costPrice = [200, 364, 234, 982];
// let sellPrice = costPrice.map((ele) => {
//   return (ele * 120) / 100;
// });
// console.log(`costPrice ${costPrice}`);
// console.log(`sellPrice ${sellPrice}`);

// let subjects = ["sql", "java", "node", "python"];
// let upperArr = subjects.map((ele) => {
//   return ele.toUpperCase();
// });
// console.log(subjects);
// console.log(upperArr);
// let marks = [56, 75, 59, 80, 65, 90, 45, 88];
// let highest = marks.filter((ele) => {
//   return ele >= 70;
// });
// console.log(highest);

// let marks = [30, 20, 56, 75, 59, 80, 65, 90, 45, 88];
// let greaterThan70 = [];
// marks.map((ele) => {
//   if (ele > 70) {
//     return greaterThan70.push(ele);
//   }
// });
// console.log(greaterThan70);
// let nums = [1, 2, 3, 4, 5];
// let array = [10, 20, 30, 40];
// let sum = 0;
// array.forEach((element) => {
//   sum = sum + element;
// });
// console.log(sum);

// let nums = [10, 20, 30, 40, 50];
// sum = nums.reduce((acc, ele) => {
//   return acc + ele;
// });
// console.log(sum);
// let nums = [1, 2, 3, 4, 5];
// let mul = nums.reduce((acc, ele) => {
//   console.log("acc", acc);
//   return acc + ele;
// }, 0);
let sorted = [12, 2341, 223, 35, 343];
sorted.sort((a, b) => {
  return a - b;
});
console.log("ascending", sorted);
let sorted = [12, 2341, 223, 35, 343];
sorted.sort((a, b) => {
  return b - a;
});
console.log("descending", sorted);
