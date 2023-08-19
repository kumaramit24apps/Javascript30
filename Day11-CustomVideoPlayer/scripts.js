/* Get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled'); 
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullScreenButton');


/* Build our  functions */

// Function used to toggle the play and puase behaviors
function togglePlay() {
    /*
    if(video.paused){
        video.play();
    }else{
        video.pause();
    } */

    // const method = video.paused ? video.play() : video.pause();

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// to change the play button to pause and vice versa
function updateToggleButton(){
    const icon = this.paused ? '►' : '⏸';
    toggle.textContent = icon;
    console.log(icon);
}


// Function to skip forwards and backwards
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}


// Handle the slider changes
function handleRangeUpdate(){

    //similar to video.volume = this.value
    //similar to video.playbackRate = this.value
    video[this.name] = this.value;

}


// Handle the play progress change  

function handleProgressUpdate(){
    // calculate the playback percentage
    const percent = (video.currentTime / video.duration) * 100;

    // updating the width of the progress bar as the percentage changes
    progressBar.style.flexBasis = `${percent}%`;
}


// Scrubbing the progress bar slider to update the progress
function scrubProgress(e){

    // calculate the scrub time duration 
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; 

    video.currentTime = scrubTime;
}


// Function to toggle fullscreen mode
/* function handleFullScreen() {
    if (document.fullscreenElement) {
      // If currently in fullscreen mode, exit fullscreen
      if (document.exitFullscreen) {
            document.exitFullscreen();
      } 
    } else {
      // If not in fullscreen mode, enter fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } 
    }
  } */


// Refactored the above code: 
  function handleFullScreen(){
    document.fullscreenElement ? document.exitFullscreen() : video.requestFullscreen ?  video.requestFullscreen() : document.exitFullscreen();
  }

/* Hook up the event handlers   */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);

/*The timeupdate event is fired on media elements, such as <audio> and <video>, when the playback position of the media changes.*/
video.addEventListener('timeupdate', handleProgressUpdate);

/* Update the progress by clicking and scrubbing */
let mousedown = false;

progress.addEventListener('click', scrubProgress);
progress.addEventListener('mousemove', (e)=> mousedown && scrubProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


// play pause the video when clicked on the play/pause button
toggle.addEventListener('click', togglePlay);

// Skipping forwards and backwards - values coming from dataset attribute
skipButtons.forEach(button => button.addEventListener('click', skip))

// Slider range for volume and speed
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


// Fullscreen button 
fullScreenButton.addEventListener('click', handleFullScreen);

