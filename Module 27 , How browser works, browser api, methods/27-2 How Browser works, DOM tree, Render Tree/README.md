### Dom Tree Structure:
![App Screenshot](https://www.researchgate.net/profile/Olfa-Nasraoui/publication/221417012/figure/fig2/AS:669043992322053@1536523926785/Dom-Tree-of-An-Example-Web-Page.png)

![App Screenshot](https://www.researchgate.net/profile/Jian-Chang-8/publication/254002847/figure/fig1/AS:298235726974978@1448116346303/Example-of-DOM-Node-Tree.png)


### Dom tree vs render tree
The DOM tree is essentially the tree containing all of your HTML elements (nodes), whereas the render tree is a culmination of the DOM and CSSOM trees. The render tree is the one that is actually rendered onto the page.

### What does webpage rendering mean?
Rendering a webpage is the process of turning HTML, CSS, and JavaScript code into an interactive page that website visitors expect to see when clicking on a link. Every website page is designed with the end user in mind. And you definitely don’t want the visitor of your page to experience any of the common rendering issues, such as the dreaded Flash of Unstyled Content.

### What are DOM, CSSOM and render tree?
Before we proceed with explaining how webpage rendering works and how to optimize it for a better performance, let’s review the three essential terms you will come across more than once within our guide. DOM, CSSOM, and render tree are three of the most basic concepts of webpage rendering. Here is what they stand for.

### DOM
The DOM, or Document Object Model, is an application programming interface that represents the structure and content of a web document, typically in the form of HTML. DOM presents the elements of a webpage as individual nodes and objects, allowing different programming languages to interact with the content of the page. DOM provides an object-oriented representation of a webpage and allows a programming language, such as JavaScript, to easily access the document structure.

### CSSOM
The CSSOM, or the CSS Object Model, is a set of application programming interfaces for accessing and modifying the style-related information of a webpage. The CSSOM contains all the selectors and selector properties needed to correctly render the page. CSSOM is to CSS what DOM is to HTML, except that it deals with the styling of a webpage rather than its structure.

### Render tree
A render tree is a collection of objects that has to be rendered by the browser to present the information in an easily accessible manner. A render tree consists of multiple smaller elements that need to be rendered. Those elements can be referred to differently by different browser engines: for example, WebKit calls them a renderer or a render object while Gecko refers to them as a frame.

The structure of a render tree is consistent with the structure of the DOM: every string of text is represented by a separate element that has its corresponding DOM object and calculated style. The only elements that are not included in the render tree are the ones that are set to be invisible, such as tags or elements with a display:none; property.

### How does a browser render a webpage?
Rendering a webpage is something a browser does on a daily basis, and there is a standard procedure for doing it that the browser goes through every time there is a page to render. Here are the steps it takes to turn a few thousand lines of code into a webpage a user expects to see.

HTML is received from the server and processed into the DOM.
The styles are loaded and parsed into the CSSOM.
The render tree is created using the DOM and CSSOM.
The browser creates a layout for each render tree element with its individual coordinates using the flow method, which requires just one pass to layout all the elements, compared to the tables method that requires more than one pass.
The information is displayed in the browser window in its final form through the last stage of the process, also known as painting.
Every time the user interacts with the page or the scripts alter it in any way, additional steps are required, as both the structure and the style of the document can possibly be modified and need to be updated. In many cases, a complete re-rendering is not necessary, and the webpage can be updated with one of the two following techniques.

### Repaint
Repaint is a technique that allows the browser to update the appearance of the elements of the webpage without changing the layout. Repaint can have to do with the background color, the outline of the element, or its visibility.

### Reflow
Reflow takes place when the change to the webpage affects the layout of the page and the position of its elements. Reflow will recalculate the position of all the elements in the DOM, including the child and the parent components, even if the changes concern a single element. Reflow can be triggered by:

### Manipulating (adding, deleting, or altering) the elements of the DOM;
Changes in the content, including the form field content;
Changes in the CSS properties;
Adding or removing style sheets;
Changing the “class” attribute”;
Resizing the browser window;
Scrolling;
Pseudo-class activation (:hover).
How browsers optimize webpage rendering
Both repaint and reflow have the tendency to slow down the performance of a webpage, reflow even more so than repaint. Depending on the processing power of the device, reflow can slow it down significantly, and the amount of change that needs to be covered by the reflow is often so big that it can be equivalent to re-rendering the whole page. This is why browsers are doing their part to optimize the process of rendering.

One of the things they do is restrict the areas where repaint or reflow can take place. For example, when an element in a fixed position changes its size, the reflow will only affect the element itself and its related child elements, whereas a change in the size of a statically positioned element will trigger the reflow of every element connected to the element in question.

Another common optimization technique is the browsers caching the changes while running the pieces of JavaScript code and then applying the changes in a single pass after the code run has finished. For instance, here is a piece of code that will trigger one repaint and reflow:

```bash
var $body = $('body');
        $body.css('padding', '1px'); // reflow, repaint
        $body.css('color', 'red'); // repaint
        $body.css('margin', '2px'); // reflow, repaint
```
However, accessing an element property and subsequently putting just one extra line of code into the script will lead to a forced reflow:

```bash
var $body = $('body');
        $body.css('padding', '1px');
        $body.css('padding'); // reading a property, a forced reflow
        $body.css('color', 'red');
        $body.css('margin', '2px');
```
Two reflows instead of one mean twice as much strain on the system, so this situation should be avoided whenever possible. One of the ways to do it is to group reading element properties together.

Still, sometimes there are situations where a forced reflow is necessary — like when you need to apply the same property to the same element twice. For example, you can set the property “margin-left” to 100px without animation, but it needs to be changed to 50px by using transition. What you would normally do is start by creating a CSS class with a transition:

```bash
.has-transition {
           -webkit-transition: margin-left 1s ease-out;
              -moz-transition: margin-left 1s ease-out;
                -o-transition: margin-left 1s ease-out;
                   transition: margin-left 1s ease-out;
        }
And then carry out the implementation:
``` 
// our element that has a "has-transition" class by default
        var $targetElem = $('#targetElemId');
        
        // remove the transition class
        $targetElem.removeClass('has-transition');
        
        // change the property expecting the transition to be off, as the class is not there
        // anymore
        $targetElem.css('margin-left', 100);
        
        // put the transition class back
        $targetElem.addClass('has-transition');
        
        // change the property
        $targetElem.css('margin-left', 50);
However, this implementation will not work as expected. The browser will cache the changes and apply them only at the end of the code block. To have the change occur exactly when you need it, you need to trigger a forced reflow, and here is one of the ways to do it:

// remove the transition class
        $(this).removeClass('has-transition');
        
        // change the property
        $(this).css('margin-left', 100);
        
        // trigger a forced reflow, so that the changes in a class/property get applied immediately
        $(this)[0].offsetHeight; // (an example; other properties would work too)
        
        // put the transition class back
        $(this).addClass('has-transition');
        
        // change the property
        $(this).css('margin-left', 50);
This should get you the result you wanted in the first place.

### 7 tips for optimizing your webpage rendering
To make your webpages render faster and to maximize their performance regardless of the end user’s device and configuration, use these 7 tips to optimize the rendering process:

Create valid HTML and CSS with proper document encoding specifications. Styles should be included in the file and the scripts should be attached to the end of the tag.
Go for simple CSS selectors whenever possible — CSS preprocessors are not always the preferred option from the optimization standpoint. Minimize the nesting levels. In terms of performance, this is how CSS selectors rank, from fastest to slowest:
Identificator (#id).
Class (.class).
Tag (div).
Adjacent sibling selector (a + i).
Parent selector (ul > li).
Universal selector (*).
Attribute selector (input[type="text"]).
Pseudoclasses and pseudoelements (a:hover).
Refrain from manipulating the DOM as much as possible and maximize the use of cache whenever it’s appropriate, especially with properties and objects that will be reused. When performing complex manipulations, working with an element that is stored in the memory and only then appending it to the DOM is a better use of the available resources.
When using jQuery to select elements, make sure to implement the best practices for writing jQuery selectors.
When you need to change the style of the element, doing it with the help of the .class attribute is the most efficient option. And the deeper in the DOM tree you perform this change, the better for the rendering process.
If possible, animate only elements with a fixed or absolute position: they are going to require fewer resources to render properly than a statically positioned element.
You can try disabling complex :hover animations while scrolling to prevent the rendering webpage from slowing down the system.
“Keep in mind that browsers process selectors from left to right, which means the rightmost selector should be the fastest one — in most cases, it’s the #id or .class one.”
The process of optimizing the performance of your webpages is often a process of trial and error, but it doesn’t always have to be. We hope that our guide on how browsers render webpages, as well as tips on achieving optimal performance on any device or platform, will help you feel more confident on your web development journey.

And if you are looking to improve the quality or visual impact of your web project, you can always hire React, Angular, or Node.js developers, who will help you achieve much more than proper rendering of your pages. Keep in mind that the information above is mostly aimed at web development and web products. If you have a mobile application to develop and don’t have much experience with the required technologies, you may find that React Native outsourcing is a better fit for your needs.