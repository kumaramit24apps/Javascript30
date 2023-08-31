[👈 Go back](../readme.md)

## Day 23 - Speech Synthesis in Javascript

**Code Summary: Speech Synthesis in Javascript**
```javascript
// Create a new SpeechSynthesisUtterance object
const msg = new SpeechSynthesisUtterance();

// Initialize an empty array to store available voices
let voices = [];

// Select the voice dropdown element using its name attribute
const voicesDropdown = document.querySelector('[name="voice"]');

// Select all range input elements and the text textarea element
const options = document.querySelectorAll('[type="range"], [name="text"]');

// Select the speak button using its id attribute
const speakButton = document.querySelector('#speak');

// Select the stop button using its id attribute
const stopButton = document.querySelector('#stop');

// Set the text property of the SpeechSynthesisUtterance object to the value of the text textarea element
msg.text = document.querySelector('[name="text"]').value;

// Function to populate available voices in the voice dropdown
function populateVoice() {
  // Get all available voices and store them in the 'voices' array
  voices = this.getVoices();

  // Filter voices based on language (English) and generate HTML options for each voice, then add them to the voice dropdown
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Function to set the selected voice for speech synthesis
function setVoice() {
  // Set msg.voice to the selected voice from 'voices' array based on its name, obtained from 'this.value'
  msg.voice = voices.find(voice => voice.name === this.value);

  // Call toggle function to start speaking with updated voice setting
  toggle();
}

// Function to toggle speech synthesis: cancel ongoing speech and start over if 'startOver' is true
function toggle(startOver = true) {
  // Cancel any ongoing speech synthesis
  speechSynthesis.cancel();

  // If 'startOver' is true, start speaking the text using the SpeechSynthesisUtterance object
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// Function to set speech options (rate and pitch) based on user input
function setOption() {
  // Set the value of the respective option in the SpeechSynthesisUtterance object based on user input
  msg[this.name] = this.value;

  // Call toggle function to restart speech synthesis with updated options
  toggle();
}

// Event listener for 'voiceschanged' event, which triggers populateVoice function when new voices become available
speechSynthesis.addEventListener('voiceschanged', populateVoice);

// Event listener for 'change' event on voice dropdown, which triggers setVoice function to set the selected voice
voicesDropdown.addEventListener('change', setVoice);

// Event listeners for 'change' event on all options, which trigger setOption function to update speech options
options.forEach(option => option.addEventListener('change', setOption));

// Event listener for 'click' event on speak button, which triggers toggle function to start or stop speaking
speakButton.addEventListener('click', toggle);

// Event listener for 'click' event on stop button, which triggers toggle function with a parameter of false to stop speaking without starting over
stopButton.addEventListener('click', toggle.bind(null, false));
```
**Detailed Explanation:**
- The JavaScript code starts by creating a new instance of SpeechSynthesisUtterance, which represents a speech request that can be processed by the speech synthesis service.
- A variable voices is initialized as an empty array to store available voices.
- The populateVoice() function is defined, which will be used to populate the voice dropdown list. It gets all available voices using getVoices() method and filters them based on language (in this case, English) using filter(). Then, it generates HTML options for each voice using map() and adds them to the voice dropdown using innerHTML.
- The setVoice() function is defined, which sets the selected voice from the dropdown as the voice for speech synthesis by matching its name with msg.voice.
- The toggle() function is defined, which cancels any ongoing speech synthesis using speechSynthesis.cancel(). If startOver is true, it starts speaking the text using speechSynthesis.speak(msg).
- The setOption() function is defined, which sets the value of various speech options (rate and pitch) based on user input using msg[this.name] = this.value. It then calls toggle() to restart speech synthesis with updated options.
- Event listeners are added for the following events:
    - voiceschanged event on speechSynthesis object, which triggers the populateVoice() function when new voices become available.
    - change event on the voice dropdown (voicesDropdown), which triggers the setVoice() function to set the selected voice.
    - change event on all options (options), which triggers the setOption() function to update speech options.
    - click event on the speak button (speakButton), which triggers the toggle() function to start or stop speaking.
    - click event on the stop button (stopButton), which triggers the toggle() function with a parameter of false to stop speaking without starting over.

That's a detailed explanation of how this code works. It uses the Web Speech API to provide text-to-speech functionality and allows users to select different voices, adjust speech rate and pitch, and start/stop speaking.
