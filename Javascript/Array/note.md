# Array

- Array is one linear datastructure where we can store multiple values in continous manner.
- In javascript, we can store both homogenous and heterogeneous data inside array.
- Array index start from 0.

## How to decare Array?

```js
let a = [10, 30, "hello", true, [40, 50]];
console.log(a);
```

## How to access Array elements

```js
let a = [10, 30, "hello", true, [40, 50]];
console.log(a[2]); //2->index
```

## How to modify array element

```js
let a = [10, 30, "hello", true, [40, 50]];
a[2] = 50;
console.log(a); //[10, 30, 50, true, [40, 50]]
```

## How to traverse Array?

- We can traverse array by using any looping statment like for, while, do while.
- We can traverse by using `'for of' loop and 'for in ' loop`.

**_for loop example_**

```js
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
```

**_for of loop example_**

```js
let a = [10, 30, "hello", true, [40, 50]];
for (let j of a) {
  console.log(j);
}
```

**_for in loop example_**

```js
const user = {
  name: "Alex",
  age: 28,
  role: "Developer",
};

// Loop through the keys of the object
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

# Array Methods

## 1. push()

- this method is used to add element at the end of the array.

```js
let a = [10, 20, 30];
a.push(40);
console.log(a);
```

## 2. pop()

- This method is used to remove element from the end of the array.

```js
let a = [10, 20, 30, 40];
a.pop();
console.log(a); //[ 10, 20, 30 ]
```

## 3. shift()

- This method is used to remove the element from first.

```js
a.shift();
console.log(a); //[20,30]
```

## 4. unshift()

- this method is used to add the element to first

```js
a.unshift(10);
console.log(a); //[10,20,30]
```

## 5. indexOf()

- this method is used to know the first occurance index of any given element of the array.

```js
console.log();
```

## 6. lastIndexOf()

- this method is used to know the last occurance index of any given element of the array.

## 7. includes()

- used to check element is present or not in the array.
- it returns boolean (true/false).

## 8. concat()

- used to combine/merge two or more than two array and it will return one new array.

## 9. join()

- used to convert any array into string.

## 10. reverse()

- used to reverse the original array.

## 11. splice()

- this method is used to modify the original array.
- by using this method we can remove, replace and add the element in array.
- it can take 3 parameters(startIndex, deletecount, replacementValue)

```js
// Example 1
let arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(1, 2);
console.log(arr1);

// Example 2
let arr2 = [1, 2, 3, 4, 5, 6];
arr2.splice(2, 2, 700);
console.log(arr2);

// Example 3
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(2, 0, 700);
console.log(arr3);
```

## 12. slice()

- it is used to extract some part of array.
- it will not modify the original array.
- it takes two parameters(startIndex, endIndex) but it does not includes endIndex value.

# Higher Order Array Methods

## 1. map()

- map() is one higher order array method used to traverse the array and we can perform some operation with all the array elements.

- map() method will return one new array, it does not modify the original array.
- this method takes 3 parameters.
  - first parameter identify element.
  - second parameter identify index.
  - third parameter identify array.

**_syntax_**

```js
arrayName.map((ele, index, array) => {
  //code block
  //return value
});
```

**_Example_ 1**

```js
let arr = [20, 30, 40, 50, 60];
arr.map((ele, index, array) => {
  console.log(ele, index, array);
});
// 20 0 [ 20, 30, 40, 50, 60 ]
// 30 1 [ 20, 30, 40, 50, 60 ]
// 40 2 [ 20, 30, 40, 50, 60 ]
// 50 3 [ 20, 30, 40, 50, 60 ]
// 60 4 [ 20, 30, 40, 50, 60 ]
```

**_Example_ 2**

```js
let costPrice = [200, 364, 234, 982];
let sellPrice = costPrice.map((ele) => {
  return (ele * 120) / 100;
});
console.log(`costPrice ${costPrice}`);
console.log(`sellPrice ${sellPrice}`
// costPrice 200,364,234,982
// sellPrice 240,436.8,280.8,1178.4
```

**_Example_ 3**

```js
let subjects = ["sql", "java", "node", "python"];
let upperArr = subjects.map((ele) => {
  return ele.toUpperCase();
});
console.log(subjects);
console.log(upperArr);
// [ 'sql', 'java', 'node', 'python' ]
// [ 'SQL', 'JAVA', 'NODE', 'PYTHON' ]
```

## 2. filter()

- filter() is one higherorder array method used to traverse the array and it check the condition.
- it returns one new array, there the element will be stored which are matching with the condition.
- filter() method also can take 3 parameters, (element, index, array)

```js
let marks = [56, 75, 59, 80, 65, 90, 45, 88, 70];
let highest = marks.filter((ele) => {
  return ele >= 70;
});
console.log(highest);
```

## 3. forEach()

- this is also one higher order array method and it is used to traverse the array.
- it can take 3 parameters(element, index, array)
- the main difference b/w map() and forEach(), forEach method can't return any value.

```js
let array = [10, 20, 30, 40];
let sum = 0;
array.forEach((element) => {
  sum = sum + element;
});
console.log(sum);
```

## 4. reduce()

- reduce() method is one higher order array method, it can take 4 parameter(accumulator, element, index, array).
- it is used to make the array into single value.
- by default accumulator value will be first element value.
- when we want to add, multiply all the element we can use reduce method.

**_Example 1_**

```js
let nums = [10, 20, 30, 40, 50];
sum = nums.reduce((acc, ele) => {
  return acc + ele;
});
console.log(sum);
```

**_Example 2_**

```js
let nums = [1, 2, 3, 4, 5];
let mul = nums.reduce((acc, ele) => {
  console.log("acc", acc);
  return acc * ele;
}, 1);
console.log(mul);
```

## 5. sort()

- sort() method is used to sort the array both in ascending and descending order.

- this method will change the original array.

- it can take 2 parameters.
  - if we are return first - second parameter, it will give ascending order.
  - if we are return second - first parameter, it will give descending order.

**_Example 1_**

```js
// ascending order
let sorted = [12, 2341, 223, 35, 343];
sorted.sort((a, b) => {
  return a - b;
});
console.log("ascending", sorted);

// decsending order
let sorted = [12, 2341, 223, 35, 343];
sorted.sort((a, b) => {
  return b - a;
});
console.log("descending", sorted);
```
