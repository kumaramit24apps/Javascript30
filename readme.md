# 30 Days Javascript Project Building

## Reflecting on what I Learn Everyday from Day 01. 

Here I will reflect on what I have learn each day. I will jot down every important thing which I have learned. 

This will help me look back my learnings. 

### Day 01 - Drum Kit App
This is the Day 01. Today I have learned about the following concepts in javascript: 

- Audio Elements: HTMLAudioElement Properties and Methods
    - Properties: 
        - ```currentTime```: Get or set the current playback time position
        - ```duration```: Returns the total duration of the the audio*
        - ```paused```: Indicates whether the audio is paused or not*
        - ```volume```: Gets or sets the volume level of the audio*

    - Methods: 
        - ```play()```: play the audio from current position
        - ```pause()```: pause the audio playback
        - ```load()```: loads/reloads the audio file 

#### How to use the Audio Element Properties and Methods
To interact with an ```<audio>``` element in JavaScript, you can use methods like getElementById() or querySelector() to select and retrieve a reference to the ```<audio>``` element in your code. Once you have a reference to it, you can access its properties and call its methods to control playback, adjust volume, get duration, etc.
```javascript
// Function to play sound and adding transform on play

  function playsound(e){

    // Selecting the audio element based on it's data attribute
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Selecting the relevant keys baased on data attribute
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    // checks if the matching audio element exists
    if(!audio) return 

    // reset the current time to zero to reset the 
    // current time and play audio again on keypress
    audio.currentTime = 0; 

    // call the play method from HTMLAudioElement interface.
    audio.play();

    //adding .playing class from CSS to the current key element
    key.classList.add("playing"); 
  }
```
For example, here's how you can play an ```<audio>``` element using JavaScript:
This code selects an  ```<audio>``` element with id "myAudio" using getElementById(), and then calls its .play() method to start playing the audio.

- Key Events: **keydown event**
    - keydown event
        ```javascript
        window.addEventListener("keydown", playsound);
        ```  
        when a key is pressed down, the function specified as the second argument .ie. ```playsound()``` will be executed.
        
- ```transitionend``` event: This event is fired when the CSS transition is completed. 
    
    When an element undergoes a CSS transition, which is a change in its CSS properties over time, the transitionend event is triggered once the transition has finished. This event allows you to perform actions or execute code after the transition has completed.

    To listen for the transitionend event, you can use the addEventListener() method in JavaScript.
    ```javascript

    // Selecting all the keys
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
   
   
   /* when following function is called as an event listener for a transitionend
    event, it checks if the transition was triggered by the "transform" property. 
    If it wasn't, nothing happens. If it was, it removes the CSS class "playing" 
    from the element that triggered the event. */

    function removeTransition(e) {
        if(e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    ```

This wraps up day 01. It was quite easy and simple. 


*** 
---
### Day 02 
This is the Day 02. Today I have learned about the following concepts in javascript: 
