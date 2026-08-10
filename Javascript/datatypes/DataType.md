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

**important js quastion**

1. how maney was we can wirte js code ?

2. let vs var vs const ?

3. diffirence between null and undifiend ?

4. how to know the data type in the javascript ?
