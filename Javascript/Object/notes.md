# Object

- Anything that have physical existance is called as Object.
- In javascript object is key and value pairs enclosed with curly braces{}.
- these key-value pairs are called properties, all the properties will be separated by comma(,).
- all the key-value will be separated by colon(:)
- key should be unique, value can be duplicate.
- we can create object in 3 ways in javascript.
  - by using object literals.
  - by using class.
  - by using functional constructor.

## Object by using literals

**_Example_**

```js
let student = {
  sname: "miller",
  sid: 101,
  isStudying: false,
  skills: ["sql", "java", "python", "webtech"],
  address: {
    city: "chennai",
    state: "TamilNadu",
  },
  work: () => {
    console.log("Workaholic");
  },
};
console.log(student);
```

### How to Access Property

**_syntax:_**

```js
objectname.key;
```

```js
console.log(student.sname); //Miller
```

### How to Modify any property

```js
objectname.key = newValue;
```

```js
student.isWorking = true;
console.log(student.isWorking); //false
```

### How to add new property

- adding new property and modifying old property, syntax is same
- if the key is present then it will modify, otherwise new property will be added

```js
objectname.newKey = value;
```

```js
student.phone = 9003820934;
console.log(student.phone); //9003820934
```

### How to delete any property

```js
delete objectname.key;
```

```js
delete student.sname; //Miller
```

### How to access object by using []

```js
objectname["key"];
//dont forgot quotes
```

```js
student["sname"]; //Miller
student[sname]; //error
```
