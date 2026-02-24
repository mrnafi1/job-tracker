Answer to the question 1 :
getElementById is the most specific way to grab a single element by its unique ID. getElementsByClassName returns a live list of all elements that share the same class name. querySelector is a modern "all-in-one" tool that lets you find the first element using CSS-style selectors (like #id or .class), while querySelectorAll finds every element matching that selector and gives them to you in a list.

Answer to the question 2 :
To create an element, you first use document.createElement('tagName') to make it in the computer's memory. After that, you can add text or classes to it so it looks the way you want. Finally, you use a method like appendChild() or prepend() to actually "hook" it onto an existing parent element so it shows up on your webpage.

Answer to the question 3 :
Event Bubbling is a behavior where an event (like a click) doesn't just stay on the button you pressed. Instead, the event "bubbles up" through the parent elements, all the way to the top of the page. Think of it like a child telling a secret to their parent, who then tells it to the grandparent—everyone up the chain gets the news.

Answer to the question 4 :
Event Delegation is a smart technique where instead of putting a click listener on every single child element (like 100 different list items), you just put one listener on their common parent. Because of bubbling, the parent can catch the event and figure out exactly which child was clicked. This saves a lot of memory and ensures that even if you add new items to the list later, they will still work automatically.

Answer to the question 5 :
preventDefault() tells the browser, "Don't do what you usually do," like stopping a link from opening or a form from refreshing the page. On the other hand, stopPropagation() tells the event, "Stop right here," which prevents the event from bubbling up to any parent elements. In short, one stops a default browser action, while the other stops the signal from traveling further up the DOM. 
