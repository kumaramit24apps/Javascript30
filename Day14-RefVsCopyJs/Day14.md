[👈 Go back](../readme.md)

## Day 14 - Object and Arrays 

**Object and Arrays - Reference vs Copy**

```javascript
     
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;  
    // team is the reference to the original players array

    console.log(team, players);

    // You might think we can just do something like this:

    // team[3] = 'lux'; 

    // however what happens when we update that array?
    console.log(team, players);



    


    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    
    //creating copy of the original array
    
    //method 01. 
    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();

    //method 02. 
    // or create a new array and concat the old one in
    const team3 = [].concat(players)

     
    // method 03.  
    // or use the new ES6 Spread
    const team4 = [...players]; 
    

    // now when we update it, the original one isn't changed
    team4['3'] = 'Amit Kumar'



    //method 04. 
     const team5 = Array.from(players) ;
     team5['3'] = "David"
     
     console.log(team5) ;



    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // const captain = person
    //we're not making a copy instead we're passing the reference object
    // captain.numers = 99; 


    // how do we take a copy instead?
    // method 01. 
    const cap2 = Object.assign({}, person, {number: 99, age: 12});
    console.log(cap2) ;


    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    console.log(cap3);
    cap3.age = 32; 
    console.log(cap3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
        name: 'wes',
        age: 32,
        social: {
            twitter: '@iAmitKumar', 
            facebook: '@iKumarAmit'
        }
    }

    console.clear();
    console.log(wes);

    // it makes one level deep copy not the entire object
    const dev = Object.assign({}, wes); 

    dev.social.twitter = "ikumaramit";

    // returns a copy of the object wes. 
    const dev2 = JSON.parse(JSON.stringify(wes));
    

```
