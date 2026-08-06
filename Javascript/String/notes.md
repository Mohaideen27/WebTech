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
