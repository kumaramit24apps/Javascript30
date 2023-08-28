[👈 Go back](../readme.md)

## Day 21 - Geolocation Based Speedometer and Compass

**Code Summary: Geolocation Based Speedometer and Compass**

```javascript
    const arrow = document.querySelector('.arrow'); 
    // Selects the HTML element with class "arrow" and assigns it to the variable 'arrow'

    const speed = document.querySelector('.speed-value'); 
    // Selects the HTML element with class "speed-value" and assigns it to the variable 'speed'

    navigator.geolocation.watchPosition((data) => {
        speed.textContent = data.coords.speed; 
        // Updates the text content of the 'speed' element with the user's speed from the geolocation data

        arrow.style.transform = `rotate(${data.coords.heading}deg)`; 
        // Rotates the 'arrow' element based on the user's heading from the geolocation data
        
    }, (err) => {
    alert(err); // Displays an alert message if there is an error while retrieving geolocation data
});

```