[👈 Go back](../readme.md)

## Day 13 - Slide in on scroll

**Slide in on scroll - Day 13 Summary**

```javascript
    // Used to improved the performance during scrolling, it will simply delay the 
    // whichever function we pass through this. 

    function debounce(func, wait = 200, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }


  const sliderImages = document.querySelectorAll('.slide-in');
  function checkSlide(e){

    // calculate the total scroll amount at the bottom of the viewport
    // scrollY tells how far we have scroll from the top + innerHeight tells the total
    // height of the viewport. 
    // slideImage.height tells the image total height and we're dividing it by 2, to get
    // half the image height. Also substracting this from the Total bottom scroll position
    // so that we can slide in at halfway through the image. 
      sliderImages.forEach( sliderImage => {
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      
      // calculate the bottom of each image
      // sliderImage.offsetTop calculates the height from top of the viewport to top of
      // the image. We're adding image  height to calculate the distance from bottom 
      // of the image to top of the viewport. 
      const imageBottom = sliderImage.offsetTop + sliderImage.height; 

      // checking whether we've scrolled half way through the image
      // slideInAt should be greater than sliderImage.offsetTop to meet this criteria
      const isHalfShown = slideInAt > sliderImage.offsetTop; 

      // checking whether we've have not reached the bottom of the the image. 
      const isNotScrolledPastImage = window.scrollY < imageBottom; 


        // Adding or removing classes based on isHalfShown or isNotScrolledPast
      if(isHalfShown && isNotScrolledPastImage) {
        sliderImage.classList.add('active');
      }else{
        sliderImage.classList.remove('active');
      }

      console.log(slideInAt);
    })

  }
    // simply wrapping our function inside debounce to dealy the function call 
  window.addEventListener('scroll', debounce(checkSlide));

```
