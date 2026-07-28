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
