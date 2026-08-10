## 5. indexOf()

- this method is used to know the first occurance index of any given element of the array.

```js
console.log();
```

## 6. lastIndexOf()

- this method is used to know the last occurance index of any given element of the array.

## 7. includes()

- used to check element is present or not in the array.
- it returns boolean (true/false).

## 8. concat()

- used to combine/merge two or more than two array and it will return one new array.

## 9. join()

- used to convert any array into string.

## 10. reverse()

- used to reverse the original array.

## 11. splice()

- this method is used to modify the original array.
- by using this method we can remove, replace and add the element in array.
- it can take 3 parameters(startIndex, deletecount, replacementValue)

```js
// Example 1
let arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(1, 2);
console.log(arr1);

// Example 2
let arr2 = [1, 2, 3, 4, 5, 6];
arr2.splice(2, 2, 700);
console.log(arr2);

// Example 3
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(2, 0, 700);
console.log(arr3);
```

## 12. slice()

- it is used to extract some part of array.
- it will not modify the original array.
- it takes two parameters(startIndex, endIndex) but it does not includes endIndex value.

# Higher Order Array Methods

## 1. map()

```js
let arr = [10, 20, 30, 40];
arr.map((ele, index) => {
  console.log(ele, index);
});
```
