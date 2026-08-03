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
