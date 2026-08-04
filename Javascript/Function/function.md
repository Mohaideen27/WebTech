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
```

### Immediate Invoke Function Expression

- This function executes only once.

**_IIFE function with parameter example_**

```js
(function (port) {
  console.log("server is running on port number", port);
})(3000);
```
