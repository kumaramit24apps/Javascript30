[👈 Go back](../readme.md)

## Day 07 - Array Cardio Day 2

**Code Summary of Day 07**

Methods we covered today: 

- <details>
    <summary><strong>Array.some()</strong></summary>
    Array.some is a JavaScript method that checks if at least one element in an array satisfies a given condition. It returns a boolean value: true if any element passes the condition, and false if none of the elements do.
  </details>
- <details>
    <summary><strong>Array.every()</strong></summary>
    The Array.every method in JavaScript checks if every array element satisfies a condition. It returns true if all elements pass, false if any fail.
  </details>
- <details>
    <summary><strong>Array.find()</strong></summary>
    Array.find() is a method in JavaScript that finds the first element in an array that satisfies a given condition. It returns the value of the first matching element, or undefined if no element is found.  </details>
- <details>
    <summary><strong>Array.findIndex()</strong></summary>
    Array.findIndex() is a JavaScript method that returns the index of the first element in an array that satisfies a given condition. If no element matches the condition, it returns -1
    </details>



**Complete code with comments below:**

```javascript
 // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    /*
    const isAdult = people.some(function(person) { 

        const currentYear = new Date().getFullYear();

        if(currentYear - person.year >= 19){
            return true;
        }
    })

    console.log(isAdult); */

    // Now using arrow functions to refactor the above function 
    const isAdult = people.some(person => {
        (new Date().getFullYear()) - person.year >= 19;
    })

    console.log(isAdult);


    // Array.prototype.every() // is everyone 19 or older?
    const allAdults = people.every(person => {
        (new Date().getFullYear()) - person.year >= 19;
    })

    console.log(allAdults);



    // Array.prototype.find()   
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const comment = comments.find( comment => comment.id === 823423);
    console.log(comment);

    
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const index = comments.findIndex( comment => comment.id === 823423);
    console.log(index);

    // Deleting the comment using splice method, it'll modify original comments array. 
    // comments.splice(index, 1); // start from the index (1) and remove 1 item. 


    /* We're simply extracting the comments starting from index
     0, to index (1) and then again we're extracting the comments
     starting from index + 1(which is 2), leaving index one, and
     extracting upto all the items in the comments array, 
     we're then spreading those arrays returned by the slice 
     method inside the new array (newComments)
    
    This method will not change the original comments array. 
    */ 

    const newComments = [
        ...comments.slice(0, index), 
        ...comments.slice(index + 1)
    ]





```