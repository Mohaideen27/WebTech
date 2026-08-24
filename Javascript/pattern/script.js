let n = 7;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    if (
      i == j ||
      i + j == n - 1 ||
      i == Math.floor(n / 2) ||
      j == Math.floor(n / 2)
    ) {
      str = str + " * ";
    } else {
      str = str + "   ";
    }
  }
  console.log(str);
}
console.log("\n");

let r = 7;
for (let i = 0; i < r; i++) {
  rit = "";
  for (let j = 0; j < r; j++) {
    if (i > j || i == j) {
      rit = rit + " * ";
    } else {
      rit = rit + "   ";
    }
  }
  console.log(rit);
}
console.log("\n");

let l = 7;
for (let i = 0; i < l; i++) {
  left = "";
  for (let j = 0; j < l; j++) {
    if (i < j || i == j) {
      left = left + " * ";
    } else {
      left = left + "   ";
    }
  }
  console.log(left);
}

for (let i = 0; i < n; i++) {
  dia = "";
  for (let j = 0; j < n; j++) {
    if (
      i == j + Math.floor(n / 2) ||
      i == j - Math.floor(n / 2) ||
      i + j == n - 1 + Math.floor(n / 2) ||
      i + j == n - 1 - Math.floor(n / 2)
    ) {
      dia = dia + " * ";
    } else {
      dia = dia + "   ";
    }
  }
  console.log(dia);
}
