[👈 Go back](../readme.md)

## Day 20 - Native Speech Recognition with JavaScript

**Code Summary: Native Speech Recognition**

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of SpeechRecognition
const recognition = new SpeechRecognition();

// Set interimResults to true to get real-time results as the user speaks
recognition.interimResults = true;

// Set the language for speech recognition to English
recognition.lang = 'en-US';

// Create a new paragraph element
let p = document.createElement('p');

// Select the element with class 'words' and append the paragraph element to it
const words = document.querySelector('.words');
words.appendChild(p);

// Add an event listener for the 'result' event, which fires when speech is recognized
recognition.addEventListener('result', e => { 
  console.log(e);

  // Extract the transcript from the event results and join them into a single string
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  // Set the text content of the paragraph element to the transcript
  p.textContent = transcript; 

  // If it is a final result, create a new paragraph element and append it to 'words'
  if(e.results[0].isFinal){
    p = document.createElement('p');
    words.appendChild(p);
  }
});

// Add an event listener for the 'end' event, which fires when speech recognition ends
recognition.addEventListener('end', recognition.start);

// Start speech recognition
recognition.start();
```

**Complete Code Explanation**

This code sets up a basic speech recognition system using the SpeechRecognition API. Here's what each part does:

- The first line checks if SpeechRecognition is supported by the browser and assigns it to window.SpeechRecognition. If not supported, it falls back to window.webkitSpeechRecognition.
- Then, we create a new instance of SpeechRecognition.
- We set interimResults to true to get real-time results as the user speaks.
- The language for speech recognition is set to 'en-US' (English).
- A new paragraph element is created and appended to an element with the class 'words'.
- An event listener is added for the 'result' event, which fires when speech is recognized. Inside this event listener, we extract the transcript from the event results and join them into a single string. The transcript is then assigned as the text content of the paragraph element.
- If it is a final result (e.g., when the user stops speaking), a new paragraph element is created and appended to 'words'.
- Another event listener is added for the 'end' event, which fires when speech recognition ends. In this case, we restart speech recognition.
- Finally, speech recognition is started.

