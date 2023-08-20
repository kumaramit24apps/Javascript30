[👈 Go back](../readme.md)

## Day 12 - Key Sequence Detection (Konami Code)

**Key Sequence Detection - Day 12 Summary**

I have explained the code insde the code block itself.

```javascript
      let pressedKeys = [];
        let secretCode = 'amit'; 
        
        window.addEventListener("keyup", (e) => {
            pressedKeys.push(e.key);

            /*-secretCode.length - 1 calculates the starting index for removing
            elements from pressedKeys. It starts counting from the end of the array 
            and subtracts 1 to shift one position to the left.*/

            /*pressedKeys.length - secretCode.length calculates how many elements 
            should be removed from pressedKeys. It subtracts the length of secretCode 
            from the length of pressedKeys. */

            pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length);
            if(pressedKeys.join('').includes(secretCode)){
                console.log('Ding Ding - You did it!');
                cornify_add();
            }
        })
```