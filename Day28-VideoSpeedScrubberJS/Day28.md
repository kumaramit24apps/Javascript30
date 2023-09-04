[👈 Go back](../readme.md)

## Day 28 - Building Video Speed Scrubber Control

**Summary - Building Video Speed Scrubber Control**

```javascript
    // Selecting the necessary DOM elements
    const speed = document.querySelector('.speed'); 
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    // Function to handle mouse movement event
    function handlemove(e){
        console.log(e); 

        // Calculating the position of the mouse cursor relative to the speed element
        const y = e.pageY - this.offsetTop; 

        // Setting the minimum and maximum playback rates
        const min = 0.4; 
        const max = 4; 
        
        // Calculating the percentage of the mouse cursor position relative to the height of the speed element
        const percent = Math.round((y / this.offsetHeight) * 100); 
        
        // Calculating the playback rate based on the percentage and range of minimum and maximum rates
        const playbackRate = (percent / 100) * (max - min) + min;  
        
        // Updating the height of the speed bar based on the percentage
        const barHeight = `${percent}%`
        bar.style.height = barHeight; 
        
        // Displaying the current playback rate on the speed bar
        bar.textContent = `${playbackRate.toFixed(2)}x`;

        // Updating the video playback rate with the calculated value
        video.playbackRate = playbackRate;
    }

    // Adding a mousemove event listener to trigger handlemove function when mouse is moved over speed element
    speed.addEventListener('mousemove', handlemove);
```

**Detailed Code Explanation**
In short, this code allows the user to control the playback speed of a video by moving the mouse cursor over a speed scrub controller.

1. We start by selecting the necessary DOM elements: speed, bar, and video.

1. The handlemove function is triggered when there is a mouse movement event over the speed element.

1. To calculate the position of the mouse cursor relative to the speed element, we subtract the offsetTop of speed from the pageY value of the event object (e.pageY - this.offsetTop). This gives us the vertical distance between the top of speed and the current position of the mouse cursor.

    - Example: If speed is positioned at 100px from the top of the page and the mouse cursor is at 150px from the top, then (e.pageY - this.offsetTop) would be equal to 50px.
1. We set a minimum (min) and maximum (max) value for playback rates. These values determine how slow or fast we want our video to play.

    - Example: If min is set to 0.4 and max is set to 4, it means that our video can play at a minimum rate of 0.4x (40% speed) and a maximum rate of 4x (400% speed).
1. To calculate the percentage of mouse cursor position relative to the height of speed, we divide (y / this.offsetHeight) by multiplying it by 100.

    - Example: If y (distance between top of speed and mouse cursor) is equal to 50px and height of speed (this.offsetHeight) is equal to 200px, then (y / this.offsetHeight) * 100 would be equal to 25%.
1. The playback rate is calculated based on this percentage and ranges between our minimum (min) and maximum (max) values. We multiply (percent / 100) by the difference between max and min, and then add min to get the final playback rate.

    - Example: If percent is equal to 25%, min is equal to 0.4, and max is equal to 4, then the playback rate would be (25 / 100) * (4 - 0.4) + 0.4, which equals to 1.1x.
1. The height of the bar is updated based on the calculated percentage.

    - Example: If the calculated percentage is 25%, then the height of the bar would be set as "25%" using CSS.
1. The current playback rate is displayed on the bar. We use .textContent property of the bar element to set it as a string with two decimal places (playbackRate.toFixed(2)).

    - Example: If the calculated playback rate is 1.13093290493x, then the text content of the bar would be set as "1.10x".
1. Finally, we update the video's playback rate with our calculated value using video.playbackRate = playbackRate.

    - Example: If our calculated playback rate is 1.1x, then we set video.playbackRate as 1.1.


