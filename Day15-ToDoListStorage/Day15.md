[👈 Go back](../readme.md)

## Day 15 - Local storage and event delegation

**Local Storage and Event delegation**

**HTML Markup**

```html
  <div class="wrapper">
    <h2>LOCAL TAPAS</h2>
    <p></p>
    <ul class="plates" >
      <li>Loading Tapas...</li>
    </ul>
    <form class="add-items">
      <input type="text" name="item" placeholder="Item Name" required>
      <input type="submit" value="+ Add Item">
    </form>
```


**Complete Javascript code with comments**
```javascript
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');

  // try getting items from the localStorage, if it doesn't exist
  // create an empty array and assing to items array. 
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e){
    e.preventDefault();

    // getting input field value
    const text = (this.querySelector('[name=item]')).value; 
    
    const item = {
      text: text, 
      // text will also work, without text: text, due to es6 syntax
      done: false
    }

    // adding each item to the items array
    items.push(item);
    
    // populate the list items in the dom

    populateList(items, itemsList);
    /* since we can only store strings inside the localstorage
     we need to first convert the items object to a string
     using the JSON.stringify method
     we can then use the JSON.parse to parse the string back to an 
     object for the reterival */
    localStorage.setItem('items', JSON.stringify(items));

    // clearing the input field after form submission
    this.reset();

    console.log(item);

  }


  function populateList(plates = [], platesList){
    //plates and platesList are same as items and itemList variables respectively

    platesList.innerHTML = plates.map((plate, i) => {
      // returning a long list of strings - first array then string using join()
      return `

        <li>
          <input type="checkbox" data-index=${i} id="item${i}" 
            ${plate.done ? 'checked' : ''}
          />
          <label for="item${i}"> ${plate.text}</label>
        </li>
      
      `;         
      
      // we're also creating a checkbox for each plate item

    }).join('');

  }

  
// toggle status of the items being done or not. 
  function toggleDone(e){

    // return if target element is not an input element
    if(!e.target.matches('input')) return; 

    // get the target element in a variable
    const targetElement = e.target; 

    // get the index of the target element from the data-index attribute
    const indexOfTargetElement = targetElement.dataset.index; 
    
    // if the target element is checked then uncheck it, and vice versa
    items[indexOfTargetElement].done = !items[indexOfTargetElement].done;
    
    // add the itemlist to the localStorage 
    localStorage.setItem('items', JSON.stringify(items));

  }


  // Adding input items to the array and populate to the itemslist on submit
  addItems.addEventListener('submit', addItem); 


  // Adding event listeners to the the ul element so that the future checkboxes
  // can also listen for the click/checked events as directed by the ul element as
  // their parents. (this is event delegation)

  /* Instead of adding event listener to the childern elements like li, we're
    simply listening for the click/checked events on the ul element */
  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);
  // before doing anythis populate the list of items from localStorage

</script>

```