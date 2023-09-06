[👈 Go back](../readme.md)

## Code explanation: 

```javascript
    // Declare a variable to hold the countdown timer
    let countdown;

    // Select the HTML element with class "display__time-left" and assign it to the variable timerDisplay
    const timerDisplay = document.querySelector(".display__time-left");

    // Select the HTML element with class "display__end-time" and assign it to the variable endTime
    const endTime = document.querySelector(".display__end-time");

    // Select all HTML elements with the attribute "data-time" and assign them to the variable buttons
    const buttons = document.querySelectorAll("[data-time]");

    // Define a function called timer that takes in a parameter called seconds
    function timer(seconds) {
    // Clear any existing timers using clearInterval() method
    clearInterval(countdown);

    // Get the current timestamp in milliseconds using Date.now() method and assign it to now variable
    const now = Date.now();

    // Calculate the future timestamp by adding seconds multiplied by 1000 (to convert from seconds to milliseconds)
    const then = now + seconds * 1000;

    // Call displayTimeLeft function and pass in the seconds parameter to update the time display immediately
    displayTimeLeft(seconds);

    // Call displayEndTime function and pass in the future timestamp (then) to update the end time display
    displayEndTime(then);

    // Start a countdown interval that updates every second
    countdown = setInterval(() => {
        // Calculate the remaining seconds by subtracting current timestamp from future timestamp and dividing by 1000 (to convert from milliseconds to seconds)
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // If there are no more seconds left, clear the interval and return from this function
        if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
        }

        // Call displayTimeLeft function and pass in the remaining seconds to update the time display
        displayTimeLeft(secondsLeft);
    }, 1000);
    }

    // Define a function called displayTimeLeft that takes in a parameter called seconds
    function displayTimeLeft(seconds) {
    // Calculate the minutes by dividing seconds by 60 and rounding down using Math.floor() method
    const minutes = Math.floor(seconds / 60);

    // Calculate the remaining seconds by getting the remainder of seconds divided by 60
    const remainderSeconds = seconds % 60;

    // Create a string representation of the time in the format "minutes:seconds" with leading zero for single-digit seconds
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;

    // Update the title of the webpage to show the current time
    document.title = display;

    // Update the text content of timerDisplay element to show the current time
    timerDisplay.textContent = display;
    }

    // Define a function called displayEndTime that takes in a parameter called timestamp
    function displayEndTime(timestamp) {
    // Create a new Date object from the timestamp
    const end = new Date(timestamp);

    // Get the hour from the Date object
    const hour = end.getHours();

    // Adjust the hour to be in AM/PM format (12-hour clock)
    const adjustedHour = hour > 12 ? hour - 12 : hour;

    // Get the minutes from the Date object
    const minutes = end.getMinutes();

    // Update endTime element's text content to show when to be back at, in AM/PM format with leading zero for single-digit minutes
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes <10 ? "0" : ""}${minutes}`;
    }

    // Define a function called startTimer, which will be used as an event handler for button clicks
    function startTimer() {
    // Get the value of the "data-time" attribute from the clicked button and parse it as an integer to get the number of seconds
    const seconds = parseInt(this.dataset.time);

    // Call the timer function and pass in the number of seconds
    timer(seconds);
    }

    // Add a click event listener to each button element, calling startTimer function when clicked
    buttons.forEach((button) => button.addEventListener("click", startTimer));

    // Add a submit event listener to the form element with name "customForm"
    document.customForm.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the value of the "minutes" input field in the form
    const mins = this.minutes.value;

    // Call the timer function and pass in minutes multiplied by 60 to convert to seconds
    timer(mins * 60);

    // Reset the form to clear input field
    this.reset();
    });

```