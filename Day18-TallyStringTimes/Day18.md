[👈 Go back](../readme.md)

## Day 18 - Tally String Times

**Code Summary: Tally String Times with ```.reduce()```**

This code calculates the total time in hours, minutes, and seconds based on the time values stored in elements with a data-time attribute.

```javascript
const timeNodes = document.querySelectorAll('[data-time]');

const timeNodesArray = Array.from(timeNodes);

const seconds = timeNodesArray
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / (60 * 60));
secondsLeft = secondsLeft % (60 * 60);

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

```

**Detiled code Explanation**

- The code selects elements with a data-time attribute using ```document.querySelectorAll()```
- The resulting NodeList is converted into an array using ```Array.from()```.

- Time values are extracted from each element in the array by mapping over it and accessing the dataset.time property.
- The time code is split into minutes and seconds using ```.split(':')```, and converted to numbers using ```parseFloat()```.
- The time code is split into minutes and seconds using ```.split(':')```, and converted to numbers using ``` parseFloat()```.
- The time code is split into minutes and seconds using ```.split(':')```, and converted to numbers using ```parseFloat()```.
- Hours are calculated by dividing seconds by 3600 (60 seconds * 60 minutes), with the remainder stored in secondsLeft
- Minutes are calculated by dividing secondsLeft by 60, with the remainder again stored in secondsLeft.
- Minutes are calculated by dividing secondsLeft by 60, with the remainder again stored in secondsLeft.