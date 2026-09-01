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

### document.getElementsByClassName()

- this method is used to target the element based on classname.
- it will return one HTML Collection.

### document.querySelector()

- In this method we can pass `id`, `class` and `tagname`.
- it will target only the first element.
- for applying id we have to give `#` and for applying class we have to give `.` for tagname name of the tag.

### querySelectorAll()

- By using this method we can target by the selectors(id/class/tag) and it will target all the elements.

### How to apply CSS from js

**_syntax_**

```js
element.style.cssproperty = "value";
```

```html
<p>this is first para</p>
<p>this is second para</p>
```

```js
let firstPara = document.querySelector("p");
firstPara.style.backgroundColor = "pink";
firstPara.style.color = "green";
```

### innerText and innerHTML

```html
<div class="box1">
  <h2>I am box1</h2>
  <p>how are you</p>
</div>
<div class="box2">
  <h2>I am box2</h2>
</div>
```

**_innerText_**

- it will give the content of any tags in text

```js
let box1 = document.querySelector(".box1");
console.log(box1.innerText);
// i am box1
// how are you
```

**_innerHTML_**

- it will give the content with tags.

```js
console.log(box1.innerHTML);
// <h2>I am box1</h2>
// <p>how are you</p>
```

### how to add and remove the class

**_classList_**

- by using this `classList` property we can get to know what are the classes are present in any element.

**_classList.add()_**

- it is used to add any new class in the element.

**_classList.remove_**

- it is used to remove any existing class from the element.

```html
<div class="card dark"></div>
```

```js
let card = document.querySelector(".card");
card.classList.remove("dark");
card.classList.add("light");
```

### how to create any element from js

**_document.createElement()_**

- this method is used to create element.
- then we can write content inside that, we can apply css.
- but this element will not display on the UI.
- for displaying we have 4 methods.

**_append()_**: it helps to insert the element at the end.
**_prepend()_**: it helps to insert the element at the starting.
**_before()_**: it display the element before the targetted element.
**_after()_**: it display the element after the targetted element.

```html
<ol>
  <li>HTML</li>
  <li>JAVASCRIPT</li>
  <li>TYPESCIRPT</li>
</ol>
```

```js
let sub1 = document.createElement("li");
sub1.innerText = "sql";
let sub2 = document.createElement("li");
sub3.innerText = "css";
let sub3 = document.createElement("li");
sub3.innerText = "python";
let sub4 = document.createElement("li");
sub4.innerText = "react";
let ol = document.querySelector("ol");
ol.append(sub1);
ol.prepend(sub2);
ol.after(sub3);
ol.before(sub4);
```

## Events in Javascript

- any action we are performing on UI is called event.
- we can handle the event by using `event handler` and `event listener`

### Main types of events

1. _mouse event_
2. _keyboard event_
3. _form event_
4. _document event_

### How to handle event by Event Handler

```js
let myInfo = () => {
  console.log("my name is santanu, i am a fullstack developer");
};
```

```html
<button onclick="myInfo()">Get My Information</button>
```

### Can we write multiple event in same element ?

- yes.

**note**
we can apply multiple event in the same element but the event should be different.

```html
<div onmouseover="fun1()" onmouseout="fun2()">
  <h2>Applying multiple events</h2>
</div>
```
