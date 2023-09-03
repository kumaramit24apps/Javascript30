[👈 Go back](../readme.md)

## Day 26 - Stripe Follow Along Dropdown

**Summary - Stripe Follow Along Dropdown Concepts**

```javascript
const triggers = document.querySelectorAll('.cool > li');
    const background = document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');

    // function to handle everything when mouse enters the specific menu item
    function handleEnter(){
        console.log('Entering!');
        console.log(this); 

        this.classList.add('trigger-enter');

        // when we use regular function the value of "this" will be the 
        // window object, but when we use arrow function it's inherited 
        // from the parent function. 
       /* setTimeout(function(){
            this.classList.add('trigger-enter-active');
        }, 150); */

        // only add the trigger-enter-active when the menu item has the trigger-enter class addded. 
        /* setTimeout( () => {
             if(this.classList.contains('trigger-enter')){
                this.classList.add('trigger-enter-active')
            } */

            //another way to write above declaration statement
           setTimeout( () => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

                
        // showing the dropdown white background 
        background.classList.add('open');

        // getting individul dropdown for each item in the menu list
        const dropdown = this.querySelector('.dropdown');

        // grabbing the dropdown coordinates relative to the viewport
        const dropdownCoords = dropdown.getBoundingClientRect();

        // grabbing the navbar coordinates relative to the viewport
        const navCoords = nav.getBoundingClientRect();

        // getting all the coords in a single object    
        const coords = {
            height: dropdownCoords.height, 
            width: dropdownCoords.width, 
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left,
        }; 

        // Resizing the dropdown background based on the actual size of the dropdown
        background.style.setProperty('width', `${coords.width}px`);
        background.style.setProperty('height', `${coords.height}px`);
        background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px )`);

    }


    // Function to remove classes on mouseleave 
    function handleLeave(){
        this.classList.remove('trigger-enter', 'trigger-enter-active');
        background.classList.remove('open');
    }

    // Event listeners for both mouseenter and mouseleave
    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter)); 
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave)); 

```