1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById finds a single element by its unique ID, while getElementsByClassName finds all elements with a given class and returns a live list that updates if the DOM changes. On the other hand, querySelector returns the first element that matches any CSS selector, and querySelectorAll returns all matching elements as a static list that doesn’t update automatically. In short, the first two are limited to ID or class, while the last two are more flexible since they support any CSS selector.

2. How do you create and insert a new element into the DOM?

Answer: To add a new element to a webpage, we use document.createElement() to make it (like a div or p), set its text with textContent or innerHTML, add attributes or classes if needed, and then place it in the page using appendChild() or prepend().

3. What is Event Bubbling and how does it work?

Answer: Event bubbling means that when an event (like a click) happens on an element, it first runs on that element and then passes up to its parent, grandparent, and so on until it reaches the document. For example, clicking a button inside a div will trigger the button’s event, then the div’s event, and then higher ones. This lets developers handle many child events with just one parent listener. If we don’t want this bubbling, we can stop it using event.stopPropagation().

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a JavaScript technique where instead of putting event listeners on many child elements, we add just one listener to their parent. Thanks to event bubbling, when a child is clicked, the event reaches the parent, and the parent’s listener handles it. This saves memory, improves performance, and makes it easier to manage events for new elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:The difference is that preventDefault() stops the browser’s default action (like preventing a link from opening a new page), while stopPropagation() stops the event from moving up or down the DOM tree (like stopping a click on a button from also triggering its parent’s click event). In short, preventDefault() blocks the browser’s behavior, and stopPropagation() blocks the event’s flow in the DOM.
