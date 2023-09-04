[👈 Go back](../readme.md)

## Day 27 - Javascript Drag to Scroll

**Summary - Javascript Drag to Scroll Concepts**
```javascript
    const slider = document.querySelector('.items'); 
    let isDown = false; 
    // Initialize a variable `isDown` to keep track of whether the mouse button is down
    
    let startX; 
    // Initialize a variable `startX` to store the initial position of the mouse when it is clicked
    
    let scrollLeft; 
    // Initialize a variable `scrollLeft` to store the initial scroll position of the slider container

    slider.addEventListener('mousedown', (e) => { // Add an event listener for when the mouse button is pressed down on the slider
        isDown = true; 
        // Set `isDown` to true, indicating that the mouse button is down
        
        slider.classList.add('active'); 
        // Add a CSS class "active" to visually indicate that something is happening

        startX = e.pageX - slider.offsetLeft; 
        // Calculate initial position of the mouse relative to the left edge of the slider using `e.pageX` and subtracting `slider.offsetLeft`

        scrollLeft = slider.scrollLeft; 
        // Store current scroll position of the slider in `scrollLeft`
    });

    slider.addEventListener('mouseleave', () => { 
    // Add an event listener for when mouse leaves the slider element
        
        isDown = false; 
        // Set `isDown` to false, indicating that the mouse button is no longer down
        
        slider.classList.remove('active'); 
        // Remove CSS class "active" to visually indicate that dragging has stopped
    });

    slider.addEventListener('mouseup', () => { 
        // Add an event listener for when mouse button is released anywhere on page
    
        slider.classList.add('active'); 
        // Add CSS class "active" to visually indicate that something has happened
    });

    slider.addEventListener('mousemove', (e) => { 
        // Add an event listener for when there is mouse movement over the slider element
        
        if (!isDown) return; 
        // If `isDown` is false, i.e., mouse button is not down, return early and do nothing

        e.preventDefault(); 
        // Prevent any default behavior that may occur due to dragging with mouse movement

        const x = e.pageX - slider.offsetLeft; 
        // Calculate current position of the mouse relative to the left edge of the slider

        const walk = (x - startX) * 2;
         // Calculate distance moved by subtracting initial mouse position from current mouse position and multiplying by 2 for amplification

        slider.scrollLeft = scrollLeft - walk; 
        // Update scroll position by subtracting `walk` distance from initial scroll position
        
    });


```

**Detailed Explanation**
- We select the HTML element with the class name "items" and assign it to the variable slider. This element represents the container for the slider. This helps us identify and work with the slider element.

- We initialize three variables: isDown, startX, and scrollLeft. These variables will help us keep track of whether the mouse button is down, the initial position of the mouse when it is clicked, and the initial scroll position of the slider container, respectively.

- We add an event listener to the slider for when the mouse button is pressed down (mousedown) on it. When this event occurs, we set isDown to true, add a CSS class of "active" to indicate that something is happening, and calculate the initial position of the mouse relative to the left edge of the slider (startX). We also store the current scroll position of the slider in scrollLeft. These actions help us prepare for dragging and scrolling.

- We add another event listener for when the mouse leaves (mouseleave) the slider element. When this event occurs, we set isDown to false and remove the "active" CSS class. This helps us reset our state when dragging is no longer happening.

- We add an event listener for when the mouse button is released (mouseup) on any part of the page. When this event occurs, we add back again an "active" CSS class to indicate that something has happened. This helps us provide visual feedback after releasing a click.

- Finally, we have an event listener for when there is mouse movement (mousemove) over the slider element. Inside this event listener, we first check if isDown is true (i.e., if mouse button is still pressed down). If not, we return early and do nothing. This helps us ensure that dragging and scrolling only happen when the mouse button is pressed down.

- If isDown is true, we prevent any default behavior (e.g., text selection) that may occur due to dragging with mouse movement. We then calculate the current position of the mouse relative to the left edge of the slider (x). We also calculate the distance the mouse has moved horizontally since it was initially clicked (walk). These calculations help us determine how much we need to scroll the slider.

- Finally, we update the scroll position of the slider by subtracting walk from scrollLeft. This causes the slider to scroll horizontally based on how far the mouse has moved. This helps us achieve a smooth dragging and scrolling experience for our slider.

In summary, by using these lines of code, we enable dragging and scrolling functionality for a slider element on a webpage, providing an interactive user experience.