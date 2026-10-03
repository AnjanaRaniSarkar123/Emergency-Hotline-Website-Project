# Emergency Hotline

## About The Project

This is an Emergency Hotline website. Users can find different emergency service numbers and can call or copy the hotline numbers easily.
## Questions & Answers
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

`getElementById()` is used to select an element by its ID.

`getElementsByClassName()` is used to select elements by their class name.

`querySelector()` selects the first element that matches a CSS selector.

`querySelectorAll()` selects all elements that match a CSS selector.



### 2. How do you create and insert a new element into the DOM?

First, we can create a new element using `document.createElement()`.

Then we can add content to the element using `innerHTML`.

Finally, we can insert the new element into the DOM using `appendChild()`.

For example:

```js
const newElement = document.createElement("div");

newElement.innerHTML = "Hello";

parentElement.appendChild(newElement);

##3. Event Bubbling

 Event Bubbling means an event moves from the child element to its parent.

Easy meaning: Child → Parent
##4. What is Event Delegation in JavaScript? Why is it useful?

 Event Delegation means using one event listener on a parent to handle events from its children.

 ##5.What is the difference between preventDefault() and stopPropagation() methods?
 preventDefault() → Stops the browser's default action.
 stopPropagation() → Stops the event from moving to the parent.
