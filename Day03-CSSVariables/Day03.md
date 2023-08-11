[👈 Go back](../readme.md)

## Day 03 - CSS Variables

**Code Summary of Day 03**

Here's the code summary of the project: 

We start by selecting all the input elements with a class of "controls" using the ```document.querySelectorAll('.controls input')``` statement.

```javascript
  /* querySelectorAll returns a nodelist which is different from what an array
    returns. It doesn't have as much as methods available as you would get for an array.*/
    const inputs = document.querySelectorAll('.controls input'); 
    
```

Then, we define a function called ```handleUpdate()```. This function will be responsible for updating the CSS properties based on the values of the input elements.


```javascript

     function handleUpdate() {
     
        const suffix = this.dataset.sizing || ''; 

         /* The name of the property is '--' followed by the current input element's
         name attribute. .i.e. base, blur etc. These name attribute values are needed
         to be same as CSS properties names. The value of this property is set to the
         current value of the input element concatenated with `suffix`. */
        
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

        /* handleupdate function is called whenever an input element 
         triggers the 'change' or 'mousemove' event. */

    inputs.forEach(input => input.addEventListener('change', handleUpdate))
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

```

Inside the ```handleUpdate()``` function, we first retrieve the value of the data-sizing attribute from the current input element using ```this.dataset.sizing```. If the attribute is not present or has a falsy value (such as an empty string), we assign an empty string to the suffix variable.

Next, we use ```document.documentElement.style.setProperty()``` to set a CSS custom property (CSS Variable Value). The value of this property is set to the current value of the input element concatenated with the suffix.

After defining the ```handleUpdate()``` function, we iterate over each input element using ```.forEach()```. For each input element, we attach two event listeners: one for ```'change'``` event and another for ```'mousemove'``` event. Both event listeners will call the ha```ndleUpdate()``` function when triggered.

In summary, this code selects all input elements with a class of "controls" and defines a function to handle updates based on their values. It then attaches event listeners to these inputs for both ```'change'``` and '``mousemove'`` events, triggering the update function whenever these events occur.