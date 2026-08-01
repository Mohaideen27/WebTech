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
