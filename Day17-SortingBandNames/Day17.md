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