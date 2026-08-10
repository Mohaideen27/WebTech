# DataType

- it is used to know which kind of data we want to assign in the variable.
- in javascript, we have 2 type of datatype. - Primitvie datatype - Non primitive datatype

## Primitive Datatype:

### 1. Number datatype

- in js both decimal and non decimal digits belongs to number datatype.
- typeof undefined is `number`

**note:**
`typeof` operator is used to know the datatype of any variable.

```js
let age = 21;
console.log(age); //21
console.log(typeof age); //number
let height = 6.33;
console.log(height); //6.33
console.log(typeof height); //number
```

### 2. String datatype

- string is collection of single or multiple characters that is enclosed with single quote('') / double quotes("")/backtick(``)
- typeof undefined is `string`

```js
let s;
s = "sameer";
console.log(s);
console.log(typeof s); //string
s = "sameer";
console.log(s);
console.log(typeof s); //string
s = `sameer`;
console.log(s);
console.log(typeof s); //string
```

### 3. Boolean datatype

- it can take only two values.(true/false)
- typeof undefined is `boolean`

```js
let isMarried = false;
console.log(isMarried);
console.log(typeof isMarried); //boolean
let hasChild = true;
console.log(hasChild);
console.log(typeof hasChild); //boolean
```

### 4. Undefined datatype

- any variable that is declared but not initialized is called as undefined.

- typeof undefined is `undefined`

```js
let empNo;
console.log(empNo); //undefined
console.log(typeof empNo); //undefined
```

### 5. null datatype

- we can assign a variable with null as a value, then it is called as null datatype.

- typeof null is `object`

```js
let childName = null;
console.log(null);
console.log(typeof null);
```

### 6. BigInt datatype

- if we want to take large number in js, we can take this bigint datatype.
- for declaring bigint datatype, we have to use `n` as suffix.
- typeof BigInt `BigInt`

```js
let x = 9580969834327n;
console.log(n);
console.log(typeof x); // bigint
```

## Non primitive datatype

- js having 3 non-primitive datatype

1. function
2. array
3. object

**important js question**

1. how many ways we can write js code ?

2. let vs var vs const ?

3. difference between null and undefined ?

4. how to know the data type in the javascript ?

# Math Object

- this is one built in object in javascript, used to perform mathematical operations.

## Math.max()

- used to find the maximum number.

```js
console.log(Math.max(5, 8, 15, 22, 2, 3, 123, 4, 3)); //123
```

## Math.min()

- used to find the minimum number.

```js
console.log(Math.min(873, 13, 45, 45.4, 45.2, 4)); //4
```

## Math.abs()

- used to provide the positive value.

```js
console.log(Math.abs(-98));
```

## Math.floor()

- it is used to provide floor value of the number.

```js
console.log(Math.floor(5.8)); //5
console.log(Math.floor(2.3)); //2
```

## Math.ceil()

- it is used to provide ceiling value of the number.

```js
console.log(Math.ceil(2.3)); //3
console.log(Math.ceil(5.1)); //6
console.log(Math.ceil(12.9)); //13
```

## Math.round()

- it is used to provide round of value of the number.
- if the decimal value is 0.5 or more than that it will give next value.

```js
console.log(Math.round(7.6)); //8
console.log(Math.round(7.4)); //7
console.log(Math.round(7.1)); //7
console.log(Math.round(7.9)); //8
console.log(Math.round(7.5)); //8
```

## Math.pow()

- it is used to know th power of any number.
- it takes 2 parameter(base and power)

```js
console.log(Math.pow(5, 3)); //125
```

## Math.sqrt()

- it is used to know th squareroot of any number.

```js
console.log(Math.sqrt(289)); //17
```

## Math.random()

- it is used to generate random number between 0.0 to 0.9(less than 1)

```js
console.log(Math.random());
```

### how to generate random number b/w some range

let start=10
let end=10
let randomNumber=Math.floor(Math.random()\*(end-start)+1 +start)

# Decision Making Statement

1. if condition

2. if else condition

3. else if ladder

4. switch

## If condition

**_syntax_**

```js
if (condtion) {
  //true block
}
```

## If else condition

**_syntax_**

```js
if (condition) {
  //true block
} else {
  //false block
}
```

## If else ladder

- if we want to check more than one condition then we should use this.
- any one block is executed means it will not check the remaining blocks.

**_syntax_**

```js
if(condition 1){
    //code block
}else if(condition 2){
    // code block
}else{
    //false block
}
```

## switch

**_syntax_**

```js

```

# Looping Statement

## For loop

**_syntax_**

```js
for (initialization; condition; updation) {
  //code block
}
```

**_example_**

```js
for (let index = 0; index < =5; index++) {
    console.log(index);


}
```

## While Loop

```js
//initialization
while (condition) {
  //updation
}
```

**_example_**

```js
let i = 10;
while (i <= 20) {
  console.log(i);
  i++;
}
```

## Do While Loop

```js
//initialization
do {
  //updation
} while (condition);
```

**_example_**

```js
let i = 10;
do {
  console.log(i);
  i++;
} while (i <= 20);
```

# Function

- function is one block of code performing some specific task.
- function is used for code reusability, modulartiy, maintainability and readablility.

## Named Function

- function having name, is called `Named Function`.

**_syntax_**

```js
function functionName() {
  //code block
}
functionName();
```

**_Example_**

```js
function add() {
  console.log(2 + 8);
}
add();
```

- for executing the function we should call the function by the function name.

## Function with parameters

**_syntax_**

```js
function add(a, b) {
  console.log(a + b);
}
add(5, 2);
add(15, 23);
```

## Function with return statement

**_syntax_**

```js
function sub(a, b) {
  return a - b;
}
let res = sub(40, 10);
console.log(res);
console.log(sub(100, 80));
```

## Anonymous function

Any function that does not have name is called anonymous function.

**_syntax_**

```js
function(){

}
```

- Here we cant execute the function because it doesnt have the name.

## Function with Expression

**_syntax_**

```js
variable = function () {
  //code block
};
```

## Arrow Function

**_syntax_**

```js
variable = () => {
  //code block
};
```

**Example**

```js
let add = (a, b) => {
  console.log("I am add function");
  return a + b;
};
console.log(add(40, 5)); //45
```

**Note**

- In Arrow function, if there is only one statement that time no need to use return keyword and {}.

**_syntax_**

```js
variable=()=> // code block
```

**Example**

```js
let add = (a, b) => a + b;
console.log(add(40, 5)); //45
```

## Nested Function

- Creating one function inside another function is called as nested function.
- function created inside the another function should be called inside that function only.

**_Example_**

```js
let outer = () => {
  console.log("I am outer function");
  let inner = () => {
    console.log("I am inner function");
  };
  inner();
};
outer();
```

## Lexical scoping

- In nested function, inner function can access the properties of the outer function but outer function can not access the properties of the inner function is called `lexical Scoping`.

**_Example_**

```js
let outer = () => {
  let a = 10;
  let inner = () => {
    let b = 10;
    console.log(a);
    console.log(b);
  };
  inner();
  console.log(b);
};
outer();
```

## Higher order function and callback function

### Higher order function

- Any functionn that takes any other function as a function as a argument is called as `higher order function`.

### Callback function

- The function we are sending as a argument to the higher order function is called as `callback function`.

**_Example 1_**

```js
let wish = () => {
  console.log("happy birthday");
};
let greeting = (myFunc) => {
  myFunc();
};
greeting(wish);
```

**_Example 2_**

```js
let greeting = (myFunc) => {
  myFunc();
};
greeting(() => {
console.log("happy birthday"));
};
```

**_Example 3_**

```js
let cal = (task, a, b) => {
  task(a, b);
};
cal(
  (a, b) => {
    console.log("addition is", a + b);
  },
  10,
  20,
);
cal(
  (a, b) => {
    console.log("subtraction is", a - b);
  },
  100,
  20,
);
cal(
  (a, b) => {
    console.log("multiplication is", a * b);
  },
  15,
  20,
);
cal(
  (a, b) => {
    console.log("division is", a / b);
  },
  10,
  2,
);
```

### Difference between var and let

1. in `let` keyword re-declaration is not possible, but in `var` keyword re-declaration is possible.

**_Example_**

```js
var a = 10;
var a;
let b = 90;
let b; //X
```

2. `let` keyword having block scope but var keywork having **block scope, functional scope and global scope.**

**_Example_**

```js
{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log(x); //10
  console.log(y); //20
  console.log(z); //30
}
console.log(x); //10
console.log(y); //X
console.log(z); //X
```

**_Example using for loop_**

```js
function varScope() {
  for (var i = 1; i <= 5; i++) {}
  console.log(i); //6
}
varScope();
function letScope() {
  for (var i = 1; i <= 5; i++) {}
  console.log(i); //X
}
letScope();
```

3. `variable hositing` is possible in **var** keyword but in **let** not possible.

**What is Variable Hoisting?**

- if we declared any variable by using `var` keyword and we access it before declaration.
- the declaration will move to top and it will give the output as undefined. This process is called `variable hosting`.

**_Example_**

```js
console.log(x); //defined
var x;
console.log(y); //defined
var y = 20;
```

```md
**IMPORTANT QUESTIONS**

1. var vs let vs const
2. undefined vs null
3. how to know the datatype
4. lexical scoping
5. higher order and callback function
6. what is IIFE
7. difference btwn slice and substring in string
8. string interpolation / template literals
9. how to convert string into array
10. slice() and splice in array
11. how to convert array into string
```

### Immediate Invoke Function Expression

- This function executes only once.

**_IIFE function with parameter example_**

```js
(function (port) {
  console.log("server is running on port number", port);
})(3000);
```
