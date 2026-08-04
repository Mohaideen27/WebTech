// function empDetails() {
//   console.log("miller");
//   console.log(101);
// }

// empDetails();
// function sub(a, b) {
//   return a - b;
// }
// let res = sub(40, 10);
// console.log(res);
// console.log(sub(100, 80));

// function spyNumber(n) {
//   let add = 0;
//   let mul = 1;
//   while (n > 0) {
//     let digit = n % 10;
//     add = add + digit;
//     mul = mul * digit;
//     n = Math.floor(n / 10);
//   }
//   return add === mul;
// }
// console.log(spyNumber(123));

// function revNumber(n) {
//   let rev = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
//   }
//   return rev;
// }
// console.log(revNumber(123));

// let prime = function (j) {
//   let b = true;
//   for (let i = 2; i < j; i++) {
//     if (j % i == 0) {
//       b = false;
//       break;
//     }
//     let n = j;
//   }
//   return b;
// };
// for (let i = 2; i <= 20; i++) {
//   if (!prime(i)) {
//     console.log("not prime number " + i);
//   }
// }
// function auto(num) {
//   let n = Math.pow(num, 2);
//   let m = 10;
//   let br = 0;
//   while (br == n) {
//     let d = 0;
//     d = n % m;
//     console.log(d);

//     if (d == num) {
//       return "automorphic";
//     }
//     m = m * 10;
//     br = d;
//   }
//   return "not automorphic";
// }

// console.log(auto(75));

// // method 2
// let isAutoMorphic = (num) => {
//   let sq = num * num;
//   while (num > 0) {
//     let d = num % 10;
//     let sq_d = sq % 10;
//     if (num != sq_d) {
//       return false;
//     }
//     num = Math.floor(num / 10);
//     sq = Math.floor(sq / 10);
//   }
//   return true;
// };

// console.log(isAutoMorphic(625));

// // ! Arrow function
// let multiply = (a, b) => {
//   console.log("I am multiply function");
//   console.log(a * b);
// };

// // type 2
// let division = (a, b) => a / b;
// console.log(division(40, 5));

// let armstrong = (a) => {
//   let arm = a;
//   let count = (n) => {
//     let c = 0;
//     while (n > 0) {
//       c++;
//       n = Math.floor(n / 10);
//     }
//     return c;
//   };
//   let pow = count(a);
//   let sum = 0;
//   while (a > 0) {
//     let d = a % 10;
//     sum = sum + d ** pow;
//     a = Math.floor(a / 10);
//   }

//   return sum == arm;
// };

// console.log(armstrong(1634));

// let outer = () => {
//   let a = 10;
//   let inner = () => {
//     let b = 10;
//     console.log(a);
//     console.log(b);
//   };
//   inner();
//   console.log(b);
// };
// outer();

// let greeting = (myFunc) => {
//   myFunc();
// };
// greeting(() => {
//   console.log("happy birthday");
// });

// let add = (a, b) => {
//   console.log("addition is", a + b);
// };
// let sub = (a, b) => {
//   console.log("subtraction is", a - b);
// };
// let mul = (a, b) => {
//   console.log("multiplication is", a * b);
// };
// let div = (a, b) => {
//   console.log("division is", a / b);
// };

// let cal = (task, a, b) => {
//   task(a, b);
// };
// cal(add, 10, 20);
// cal(sub, 100, 20);
// cal(mul, 15, 20);
// cal(div, 10, 2);

// function varScope() {
//   for (var i = 1; i <= 5; i++) {}
//   console.log(i);//6
// }
// varScope()
// function letScope() {
//   for (let i = 1; i <= 5; i++) {}
//   console.log(i);//X
// }
// letScope()
(function (port) {
  console.log("server is running on port number", port);
})(3000);