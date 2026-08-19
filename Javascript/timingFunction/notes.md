# Timing function

## setTimeout()

- it is a built in javascript function that execute a specified block of code or function once after specific time.
- this is one asynchronized function, it execute once after all the synchronized code got executed.
- it can take 2 parameter, first one is callback function, second one is time in miliseconds.

```js
setTimeout(() => {
  console.log("hi");
});
console.log("hello");
setTimeout(() => {
  console.log("how are you");
}, 3000);
console.log("bye");
// hello
// bye
// hi
// how are you //after 3s
```

## clearTimeout()

- this method is used to cancel a timer previously established by calling setTimeout()
- for doing this when we are creating any setTimeout()we have to store the id in one variable. then the variable we have to pass as an argument to the clearTimeout().

```js
let t1 = setTimeout(() => {
  console.log("hi");
}, 5000);
clearTimeout(t1);
```

## setInterval()

- it is a method in javascript repeatedly execute a specific function or code block at fixed time intervals.

```js
setInterval(() => {
  console.log("hello everyone");
  //   hello everyone
  //   hello everyone
  //   hello everyone
  //   ...
  //   ...
}, 1000);
```

## clearInterval()

- this method is used to cancel a timer previously established by calling setInterval()
- for doing this when we are creating any setInterval(), we have to store the id in one variable. then the variable we have to pass as an argument to the clearInterval().

```js
let t1 = setInterval(() => {
  console.log("hi");
}, 1000);
clearInterval(t1);
```
