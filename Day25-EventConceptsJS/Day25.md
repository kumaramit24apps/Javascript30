[👈 Go back](../readme.md)

## Day 25 - Javascript Event Capture, Propagation, Bubbling and once

**Javascript Event Capture, Propagation, Bubbling and once Concepts**

```javascript
 const divs = document.querySelectorAll('div');
    const button = document.querySelector('button');

    function logText(e){
        console.log(this.classList.value);

        e.stopPropagation();
        // stop bubbling/capturing the event

        // console.log(this);
    }

    // when we click on any childern div, the click event will bubble up
    // way up to the document 
    // divs.forEach(div => div.addEventListener('click', logText));

    // capture the click event from top level to the last target element,
    // by default capture is false. 
    // divs.forEach(div => div.addEventListener('click', logText, {capture: true}));
   
    // It'll listen for the click event once and unbind / removes the click event from that element. 
    divs.forEach(div => div.addEventListener('click', logText, {capture: false, once: true}));

    button.addEventListener('click', () => console.log("click!!"), {once: true});




```