[👈 Go back](../readme.md)

## Day 24 - Sticky Navbar in Javascript

**Code Summary: Sticky Navbar in Javascript**

```javascript
// We select the navigation element with the id 'main' and store it in the variable 'nav'
const nav = document.querySelector('#main');

// We store the distance from the top of the page to the 'nav' element in the variable 'topOfNav'
const topOfNav = nav.offsetTop;

// We define a function called 'fixNav' to handle fixing the navigation
function fixNav() {
  // If we have scrolled past or reached the 'nav' element
  if (window.scrollY >= topOfNav) {
    // We adjust the padding-top of the body to make space for the fixed navigation
    document.body.style.paddingTop = nav.offsetHeight + "px";
    // We add a class called 'fixed-nav' to make the navigation stay fixed at the top
    document.body.classList.add('fixed-nav');
  } else {
    // If we are above or before the 'nav' element, we remove the fixed class and reset padding-top
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

// We add an event listener to listen for scroll events on the window and call 'fixNav' function when scrolled
window.addEventListener('scroll', fixNav);

```
