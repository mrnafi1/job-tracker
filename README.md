Answers to the Challenge Questions


1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?
Basically, getElementById is what I use when I need to grab one specific element using its unique ID—it’s very direct. getElementsByClassName is for when I have a group of things with the same class and I want them all in a list. But honestly, I find querySelector and querySelectorAll much more useful because they let me use CSS selectors. It’s like a modern, all-in-one tool that handles IDs, classes, and tags all in the same way.

2. How do you create and insert a new element into the DOM?
It’s usually a two-step process for me. First, I create the "empty" element in JavaScript using document.createElement('tagName'). After that, I add whatever text or styling I need to it. Finally, to actually show it on the page, I use appendChild() or prepend() to attach it to a parent element. It's kind of like building a LEGO piece first and then clicking it into the main set.

3. What is Event Bubbling? And how does it work?
Think of Event Bubbling like a signal that travels upward. When I click a button, that click event doesn’t just stay on that button; it "bubbles up" to its parent, then the grandparent, all the way to the top of the page. It’s a built-in behavior in JavaScript that makes sure the parent elements are aware of what's happening to their children.

4. What is Event Delegation in JavaScript? Why is it useful?
Instead of putting a click listener on every single child element (which can be a mess), I just put one listener on the parent container. Because of bubbling, the parent can "catch" the clicks from any of its children. This is a huge lifesaver because it makes the code run smoother and I don't have to worry about adding new listeners if I add more items to the list later.

5. What is the difference between preventDefault() and stopPropagation() methods?
These two do very different things. preventDefault() is what I use to stop the browser from doing its "default" thing—like stopping a form from refreshing the page when I hit submit. On the other hand, stopPropagation() is all about the bubble; it tells the event to "stop right here" so it doesn't travel up to the parent elements. One stops an action, the other stops the signal.
