[👈 Go back](../readme.md)

## Day 02 - CSS - JS Clock 
Notes from day 02

## Working with Dates and Times using JavaScript's Date Object

In JavaScript, we can use the `Date` object to handle dates and times effectively. This object provides various methods that allow us to manipulate different components of a date, including the year, month, day, hour, minute, second, and millisecond.

Here's a breakdown of how it works:

1. We can create a new `Date` object using the `new Date()` syntax. This instance represents the current date and time.

2. To extract specific components, we can use methods like `getSeconds()`, `getMinutes()`, and `getHours()`. For instance, by using `getSeconds()`, we retrieve the current seconds component and store it in a variable called `seconds`.

3. Similarly, the `getMinutes()` method gives us the current minutes component, and `getHours()` provides the current hours component. We save these values in variables named `minutes` and `hours`, respectively.

4. With these variables (`seconds`, `minutes`, and `hours`), we can calculate the degrees of rotation for each clock hand based on their corresponding time units.

5. Finally, we apply these calculated degrees of rotation to the CSS `transform` property of each clock hand using template literals, like `rotate(${degrees}deg)`.

By utilizing the capabilities offered by the JavaScript `Date` object, we can accurately update and display real-time information on a clock.

Here's the complete code: 
```javascript

    let secondHand = document.querySelector('.second-hand');
    let minuteHand = document.querySelector('.min-hand');
    let hourHand = document.querySelector('.hour-hand');

    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();

      let secondsToDegree = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsToDegree}deg)`;

      const minutes = now.getMinutes();
      let minutesToDegree = ((minutes / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesToDegree}deg)`;

      const hours = now.getHours();
      let hoursToDegree = ((hours / 12) * 360) + 90;

      hourHand.style.transform = `rotate(${hoursToDegree}deg)`;

    }


    setInterval(setDate, 1000);
```
