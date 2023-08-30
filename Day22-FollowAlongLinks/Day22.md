[👈 Go back](../readme.md)

## Day 22 - Follow Along Links

**Code Summary: Follow Along Links**

In simple terms, this code adds an interactive highlight effect to each link on a webpage when you hover over them with your mouse. It does this by creating a special marker element and positioning it correctly over each link.


```javascript
   const triggers = document.querySelectorAll('a'); 

    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    
    function highlightLink(){
        const linkCoords = this.getBoundingClientRect();
        console.log(linkCoords); 
        const coords = {
            width: linkCoords.width, 
            height: linkCoords.height, 
            // compensate for the scroll position
            top: linkCoords.top + window.scrollY, 
            left: linkCoords.left + window.scrollX
        }
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }
    triggers.forEach(link => link.addEventListener('mouseenter', highlightLink) ); 
```

**Detailed Explanation**
- We start by finding all the links (anchor tags) on the webpage and storing them in a variable called triggers.
- Next, we create a new element called highlight which is like a colored marker that we'll use to highlight the links.
- We add a special style to this highlight element so that it looks visually appealing.
- Then, we place this highlight element on the webpage, so it becomes visible.
- Now, we define a function named highlightLink which will be responsible for highlighting each link when the mouse hovers over it.
- Inside this function, we get the size and position of the link that triggered the function using some calculations.
- We adjust these size and position details based on any scrolling that has been done on the page so that our highlighting stays accurate.
- Next, we update the size of our highlight element to match the size of the current link being hovered over.
- We also move our highlight element to exactly cover the current link by adjusting its position.
- Finally, we add an event listener to each link in our webpage, so that when someone hovers over a link with their mouse, our highlightLink function gets called.