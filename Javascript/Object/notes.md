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

## Object Methods

### Object.keys()

- this method is used to get all the keys in the form of array.

```js
let marker = {
  brand: "camlin",
  price: 50,
  color: "blue",
  canWrite: true,
};

// Object.keys()
let keys = Object.keys(marker);
console.log(keys); //[ 'brand', 'price', 'color', 'canWrite' ]
```

### Object.values()

- it is used to return all the values in the form of array.

```js
let marker = {
  brand: "camlin",
  price: 50,
  color: "blue",
  canWrite: true,
};

// Object.values(marker)
let values = Object.values(marker);
console.log(values);
// ["camlin", 50, "blue", true];
```

### Object.entries()

- it will return one nested array where all the key-value pairs will be stored each one arrays.

```js
let marker = {
  brand: "camlin",
  price: 50,
  color: "blue",
  canWrite: true,
};
// Object.entries()
let entries = Object.entries(marker);
console.log(entries);
// [
//   [ 'brand', 'camlin' ],
//   [ 'price', 50 ],
//   [ 'color', 'blue' ],
//   [ 'canWrite', true ]
// ]
```

### Object.freeze()

- this method is used to make the object frozen.
- we cant perform any CRUD operation (add, modify, delete) with the object.

```js
let ob1 = {
  obName: "laptop",
  price: "65000",
  color: "black",
};
console.log("before freeze");
console.log(ob1);
Object.freeze(ob1);
// Object.freeze(ob1)
ob1.color = "blue"; // We cant modify
ob1.ram = 8; // we cant add
delete ob1.color; // we cant delete
console.log("after freeze");
console.log(ob1);
// before freeze
// { obName: 'laptop', price: '65000', color: 'black' }
// after freeze
// { obName: 'laptop', price: '65000', color: 'black' }
```

### Object.isFrozen()

- it is used to check object is frozen or not.
- it will return boolean value.

```js
console.log(`Object.isFrozen(marker):`, Object.isFrozen(marker));
console.log(`Object.isFrozen(ob1):`, Object.isFrozen(ob1));
// Object.isFrozen(marker): false
// Object.isFrozen(ob1): true
```

### Object.seal()

- this method is similar to `Object.freeze()` here also we cant add or delete any property but here we can modify the property.

```js
Ob2 = {
  Name: "projector",
  brand: "Epson",
  price: 70000,
};
console.log("Before seal");
console.log(Ob2);
Object.seal(Ob2);
console.log("After seal");
Ob2.roomNo = 402; //We cant add
delete Ob2.price; //We cant delete
Ob2.price = 65000; // We can modify
console.log(Ob2);
// Before seal
// { Name: 'projector', brand: 'Epson', price: 70000 }
// After seal
// { Name: 'projector', brand: 'Epson', price: 65000 }
```

### Object.isSealed()

- this method is used to check object is sealed or not.
- it will return boolean value.

```js
console.log("Object.isSealed(Ob2)", Object.isSealed(Ob2));
//Object.isSealed(Ob2) true
```
