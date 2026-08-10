# String

- String is single or collection of character enclosed with single quote/double quote/backticks.

**_Example_**

```js
let str1 = 'hi';
let str2 = `hello`;
let str3 = "hello";
console.log(type of str1);
console.log(type of str2);
console.log(type of str3);

```

**Note :**
If we want to take multiline string then we can enclosed the string by using backtick.

# String Interpolation / Template Literals

- Accessing the variable inside string is called template literals.
- For this string should be enclosed with backtick, the variable we want to access should be written inside {}.

**_Example_**

```js
let name = "Naveen";
console.log(`my name is {name}`);
```

# String Methods

## Length property

- It is used to know the length of any string.

```js
let message = "how are you";
console.log(message.length);
```

## 1. toUpperCase()

- This method is used to convert the string into uppercase and it will returning one new string, it will not change original string.

## 2. toLowerCase()

- this method is used to convert the string into lowercase and it will return one new string.
- it will not change the original string.

```js
let str = "Hello";
let upper = str.toUpperCase();
console.log(str);
console.log(upper);

//! toLowerCase()

let str5 = "Hello How Are You";
let lower = str5.toLowerCase();
console.log(str5);
console.log(lower);
```

## 3. trim()

- This method is used to remove space from both the sides of the string.

**_Example_**

```js
let str = "  hi   ";
let str2 = str.trim();

console.log(str.length);
console.log(str2.length);
```

## 4. indexOf()

- it is used to know the index of the given character.
- it will take the first occurance of the character.
- if character is not present, it will return -1

**_Example_**

```js
let str = "Hello how are you";
console.log(str.indexOf("o")); //6
console.log(str.indexOf("l")); //4
console.log(str.indexOf("z")); //-1
```

## 5. lastIndexOf()

- it will take the last occurance index of the character
- if the character is not present, it will return -1.

```js
let greet = "Welcome home";
console.log(greet.lastIndexOf("o")); //9
console.log(greet.lastIndexOf("e")); //11
console.log(greet.lastIndexOf("g")); //-1
```

## 6. charAt()

- this method is used to know which character is present at the given index.

```js
let name = "Arjun";
console.log(name.charAt(1)); //r
```

## 7. concat()

- This method is used to combine/merge two or more than two string and it will return one new string.

```js
let firstName = "Mohamed";
let lastName = "Imran";
console.log(firstName.concat(" ", lastName)); //Mohamed Imran
```

## 8. includes()

- It is used to know the given string is present or not.
- if it is present, it will return true otherwise, it will return false.

```js
let address = "95, ponnamalle high road, aminjikarai, chennai, tamilnadu";
console.log(address.includes("chennai")); //true
```

## 9. replace()

- this method is used to replace one string with another string.
- it will replace only the first one.

```js
let sentence = `I am from banglore, I love bangalore`;
console.log(sentence.replace("bangalore", "chennai"));
//I am from banglore, I love chennai
```

## 10. replaceAll()

- this method is used to replace all the string

```js
let sentence2 = `hello`;
console.log(sentence2.replaceAll("l", "$"));
he$$o;
```

## 11. split()

- this method is used to string into array.

```js
let greet = "how are you";
console.log(greet.split(" "));
console.log(greet.split(""));
console.log(greet.split()); // X wrong use of split
```

## 12. slice()

- this method is used to extract some part of another string.
- it takes two parameters(startIndex, enIndex), it does not include endIndex value.
- slice() can take negative indexing also.
- endIndex value should be greater than startIndex.

```js
let msg = "how are you";
console.log(msg.slice(0, 2));
```

## 13. substring()

- this method is used to extract some part of another string.
- it takes two parameters(startIndex, enIndex), it does not include endIndex value.
- here we cant provide negative value. If we are using that will be considered as 0.
- here if we are giving endIndex value greater than startIndex, it will swap the value and provide the output.
