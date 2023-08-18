[👈 Go back](../readme.md)

## Day 09 - Dev Tools Tricks

**Code Summary of Day 09**

```javascript

    const p = document.querySelector('p');
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Learning console tricks")
    // Interpolated
    console.log('Hello I am %s string!', '😍');
    console.log(`Hello I am %s string!`, '✅');

    // Styled
    console.log('%cstyle me \nusing cssinside the \nconsole itself', 'font-size: 64px; background: orange; text-shadow: 2px 2px 0 green');

    // warning!
    console.warn('Session will be expire soon!');


    // Error :|
    console.error('Invalid username or password');


    // Info
    console.info('The session has been started now!')

    // Testing
    console.assert(1 === 2, 'wrong selection!');

    console.assert(p.classList.contains('crazy'), 'Wrong class!');


    // clearing
    // console.clear();

    // Viewing DOM Elements
    
    console.log(p)
    console.dir(p);

 
    // counting
     console.count('amit')
     console.count('amit')
     console.count('savio')
     console.count('savio')
     console.count('amit')


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/kumaramit24apps')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); 
        console.log(data);
    })

    console.table(dogs);


       // Grouping together
       dogs.forEach(dog => {
        // console.groupCollapsed(`${dog.name}`); 
        console.group(`${dog.name}`)
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} years old`);
        console.group(`${dog.name}`)
     });
 

```