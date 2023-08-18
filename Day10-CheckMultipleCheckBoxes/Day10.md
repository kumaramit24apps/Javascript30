[👈 Go back](../readme.md)

## Day 10 - Hold Shift to Check Multiple Checboxes.

**Code Summary of Day 10**

Today we've created a todo list with option to select multiple checkboxes by holding a shift key

```javascript
    let checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
        let lastChecked; 

        function handleCheck(e){
          let inBetween = false; 

          // check if the shift key is down
          // AND check that they are checking it.

          if(e.shiftKey && this.checked){
            // loop over every single checkbox
            checkboxes.forEach(checkbox => {
              console.log(checkbox);

              if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween; 
                console.log('starting to check them inbewteen')
              }
              if(inBetween){
                checkbox.checked = true; 
              }
            })
          }
          lastChecked = this;
        }

        checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

```