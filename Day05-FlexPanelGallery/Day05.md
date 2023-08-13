[👈 Go back](../readme.md)

## Day 05 - Flex Panel Gallery

**Code Summary of Day 05**

Today we have coded a gallery which mostly uses css and a little bit of javascript just to toggle the classes based on the event and states. 

Here's the full code: 

```javascript

    const panels = document.querySelectorAll('.panel');

    function toggleOpen(){

        // checking is the current panel has open class
        const isOpen = this.classList.contains('open');
        
        // removing the "open" class from all the panels. 
        panels.forEach(panel => panel.classList.remove('open'));

        // toggling the "open" class, based on the result from isOpen variable. 
        if(!isOpen){
            this.classList.toggle('open');
        }
    }
    
    function toggleActive(e){
        if(e.propertyName.includes('flex')){
            this.classList.toggle('open-active');
        }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen ));

    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive ));
```


