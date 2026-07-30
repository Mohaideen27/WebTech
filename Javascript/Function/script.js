function empDetails() {
  console.log("miller");
  console.log(101);
}

empDetails();
function sub(a, b) {
  return a - b;
}
let res = sub(40, 10);
console.log(res);
console.log(sub(100, 80));

function spyNumber(n) {
  let add = 0;
  let mul = 1;
  while (n > 0) {
    let digit = n % 10;
    add = add + digit;
    mul = mul * digit;
    n = Math.floor(n / 10);
  }
  return add === mul;
}
console.log(spyNumber(123));

function revNumber(n) {
  let rev = 0;
  while (n > 0) {
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n / 10);
  }
  return rev;
}
console.log(revNumber(123));
