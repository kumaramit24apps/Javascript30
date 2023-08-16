[👈 Go back](../readme.md)

## Day 08 - Fun with HTML5 Canvas

**Code Summary of Day 08**

Today's complete code to create a simple HTML5 Paint application. 

```javascript
 const canvas = document.querySelector('#draw');
        const ctx = canvas.getContext('2d');

        // setting canvas to full width
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight;

        ctx.strokeStyle = "#BADA55"; 
        ctx.lineJoin ='round'; 
        ctx.lineCap ='round';
        ctx.lineWidth = '20';
        let isDrawing = false; 

        // adding blend operation
        ctx.globalCompositeOperation = 'darken';  

        let lastX = 0; 
        let lastY = 0;
        let hue = 0; 

        let direction = true; 

        function draw(e) {

            // stop the function from running when they are not moused down
            if(!isDrawing) return; 

            console.log(e);

            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

            ctx.beginPath();
            // start from
            ctx.moveTo(lastX, lastY);

            // go to 
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            // update the staring point
            [lastX, lastY] = [e.offsetX, e.offsetY];
            console.log("Coming from: draw " + lastX, lastY);
            hue++;
            if (hue >= 360){
                hue = 0 ;
            }


            // Variable storke width
            if(ctx.lineWidth >= 20 || ctx.lineWidth <= 1){
                direction = !direction; 
            }
            if(direction){
                ctx.lineWidth++; 
            }else{
                ctx.lineWidth--;
            }


        }

        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mousedown', (e) =>{
             isDrawing = true;
             
            //  updating the last offset positions

             [lastX, lastY] = [e.offsetX, e.offsetY];
             console.log("Coming from: mousedown " + lastX, lastY);

        });
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
```