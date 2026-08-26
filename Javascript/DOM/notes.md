# DOM

## BOM

- BOM stands for Object Model that is contains global object window.

### What is window object

- the window object is the root global object in client-side javascript, representing the browser window or tab that runs the code.

### What is DOM

- DOM stands for _Document Object Model_, it is used to interact and manipulate the UI.

### What is document in DOM

- the document object is the object that is main entry node in DOM
- In document object our html code is stored as object.
- By using this document we can access all our html elements.
- the main entry point to a web pages content.

## How to Target elements from js

### document.getElementById()

- this method targets only one element.
- here we have to pass the `id` of the element which we want to target as a parameter.

```html
<p id="para1">i am para1</p>
<p>i am para1</p>
<p>i am para1</p>
```

```js
let para1 = document.getElementById("para1");
```

### document.getElementsByTagName()

- this method will target all the elements having same tagname.
- it will return one HTMLCollection, that behaves like array.
- now if we want to take any of the element we have to use index.

```js
let paras = document.getElementsByTagName("p");
let secPara = paras[1];
```
