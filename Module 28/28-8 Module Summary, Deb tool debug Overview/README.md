Umaar er dev tool tips course ta kore felo bondhu...
```bash
https://umaar.com/dev-tips/
```

### How to assign styles with vanilla JavaScript
As a bonus tip, if you want to start out with a simple vanilla CSS-in-JavaScript approach (assuming you have a solid use-case of course!), you could use Object.assign().

The Object.assign() method can copy an object onto a target object, such as the .style property of a DOM element. Here's the code:

```bash
const anchor = document.querySelector('a');

Object.assign(anchor.style, {
    color: 'white',
    letterSpacing: '2px'
});
```
