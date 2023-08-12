[👈 Go back](../readme.md)

## Day 04 - Array Cardio Day 01 

**Code Summary of Day 04 - still needs to add some more info**





### Sorting by years they lived 
**Algorithm to sort the inventors array by the years they lived:**

Start with the ```inventors``` array.

Define a comparison function that takes two inventors as arguments:

Calculate the number of years each inventor lived by subtracting their birth year from their death year.
If the first inventor lived longer than the second inventor, ```return -1```.
Otherwise, ```return 1```.
Call the ```sort()`` method on the inventors array and pass in the comparison function as an argument.

The ```sort()``` method will rearrange the elements of the inventors array based on how long each inventor lived.

The sorted array will be stored in a new variable, let's say oldest.

The sorted array (oldest) will now contain inventors sorted in ascending order based on how many years they lived.

Here's a JavaScript code snippet that implements this algorithm:

```javascript
    const oldest = inventors.sort((a, b) => {
        const firstPersonLifeSpan = a.passed - b.year;
        const secondPersonLifeSpan = b.passed - a.year;
        return firstPersonLifeSpan > secondPersonLifeSpan ? -1 : 1 ;
    });
    console.table(oldest)
```

### Sorting the people array alphabetically
```javascript
    const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
```

```javascript
    const peopleSorted = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });
```
In this code:

The ```sort()``` method is called on the people array to sort its elements.

Inside the sorting function ```(lastOne, nextOne) => { ... }```, we define two parameters: lastOne and nextOne. These parameters represent two elements being compared during the sorting process.

For each element being compared, we split it into two parts using the ```.split(', ')``` method. This splits the element into an array based on a comma followed by a space (', ').

Using destructuring assignment, we assign the first part of lastOne to aLast and the second part to aFirst. Similarly, we assign the first part of nextOne to bLast and the second part to bFirst.

We then compare the last names (aLast and bLast) using a simple comparison operator (>). If aLast is greater than bLast, we return 1 indicating that lastOne should be sorted after nextOne. Otherwise, if aLast is less than or equal to bLast, we ```return -1``` indicating that lastOne should be sorted before or at the same position as nextOne.

The sorting function uses these comparisons to determine the order of elements in the sorted array.

The resulting sorted array is assigned to the variable named peopleSorted.

In summary, this code sorts the people array of full names based on their last names. Each full name is split into last name and first name parts using the comma followed by a space as the delimiter. The code then compares the last names and sorts the array accordingly.

For example, after running this code with the provided people array, peopleSorted will contain an array with the elements sorted alphabetically by last name.