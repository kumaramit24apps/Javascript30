[👈 Go back](../readme.md)

## Day 17 - Sorting Band without Articles

**Code Summary: Sorting Band without Articles**

```javascript
   
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    function strip(bandName){
        // replacing the articles "a/an/the" using regex
         return bandName.replace(/^(a |the |an)/i, "").trim();
    }

    // sorting using the sort method, but stripping the articles
    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1: -1);

    // adding the sorted items to the dom.
    document.querySelector("#bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`);

    console.log(sortedBands)
```

**Code Explanation**
This code essentially sorts the band names alphabetically while ignoring common articles at the beginning of each name, and displays them as a list on a webpage.

- The bands array contains a list of band names.
- The strip function takes a bandName parameter and removes common articles ```("a", "an", "the")``` from the beginning of the name using a regular expression ```(/^(a |the |an)/i)```. It then trims any leading or trailing whitespace from the name.
- The sortedBands variable uses the sort method to sort the bands array. It compares two band names by calling the strip function on each name and using string comparison (>) to determine their order. If strip(a) is greater than strip(b), it returns ```1```, otherwise ```-1```.
- The sorted band names are then mapped to an array of ```<li>``` elements using the map method, with each band name wrapped inside an ```<li>``` tag.
- Finally, the resulting HTML string is set as the innerHTML of an element with id ```"bands"``` on the webpage, which will display the sorted list of bands.