[👈 Go back](../readme.md)

## Day30 Code explanation: 

```javascript
const holes = document.querySelectorAll(".hole"); 
// Select all elements with class 'hole' and store them in 'holes' variable

const scoreBoard = document.querySelector(".score"); 
// Select the element with class 'score' and store it in 'scoreBoard' variable

const moles = document.querySelectorAll(".mole"); 
// Select all elements with class 'mole' and store them in 'moles' variable

let lastHole; // Variable to keep track of the last hole used

let timeUp = false; // Variable to indicate if time is up or not

let score = 0; // Variable to keep track of the score

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min); 
  // Generate a random time between min and max values passed as arguments
}

// Function to get a random hole from the holes array
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length); 
  // Generate a random index within the range of holes array length

  const hole = holes[idx]; // Get the hole at that index

  if (hole === lastHole) {
    return randomHole(holes); 
    // If the current hole is same as last hole, 
    // recursively call this function again to get a different hole
  }

  lastHole = hole; // Set the current hole as last hole for next iteration
  return hole;
}

// Function to show a mole from a random hole for a certain amount of time
function peep() {
  const time = randomTime(200, 1000); 
  // Get a random time between 200ms and 1000ms (1 second)

  const hole = randomHole(holes); // Get a random hole

  hole.classList.add("up"); 
  // Add 'up' class to the hole, which will show the mole

  setTimeout(() => {
    hole.classList.remove("up"); 
    // Remove 'up' class after the specified time

    if (!timeUp) peep(); 
    // If time is not up, call peep function again to show another mole

  }, time);
}

// Function to start the game
function startGame() {
  scoreBoard.textContent = 0; // Set the score on scoreboard to 0
  timeUp = false; 
  // Set timeUp variable to false to indicate game is in progress

  score = 0; // Reset the score to 0

  peep(); // Call peep function to show a mole

  setTimeout(() => (timeUp = true), 10000); 
  // After 10 seconds (10000ms), set timeUp variable to true 
  // indicating game is over

}

// Function to handle when a mole is clicked (bonked)
function bonk(e) {
  console.log(e);
  if (!e.isTrusted) return; // If event is not trusted (likely simulated click), 
  // return and do nothing

  score++; // Increment the score by 1
  this.classList.remove("up"); // Remove 'up' class from the 
  // clicked mole's hole, hiding it again

  scoreBoard.textContent = score; // Update the score on scoreboard
}

moles.forEach((mole) => mole.addEventListener("click", bonk)); 
// Add click event listener on each mole element, 
// which calls bonk function when clicked
```
