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
function auto(num) {
  let n = Math.pow(num, 2);
  let m = 10;
  let br = 0;
  while (br == n) {
    let d = 0;
    d = n % m;
    console.log(d);

    if (d == num) {
      return "automorphic";
    }
    m = m * 10;
    br = d;
  }
  return "not automorphic";
}

console.log(auto(75));
