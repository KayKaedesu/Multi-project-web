// button
const detail = document.querySelector('.detailContainer');
const button = document.querySelectorAll('button');
let clickCount = 0;
console.log(button);
button.forEach(element => {  
  element.addEventListener("click", function(){
    clickCount++;
    if (clickCount % 2 === 1){
      detail.classList.add('detailContainerOn');
    } else {
      detail.classList.remove('detailContainerOn');
    }
  });
});
/////////////////// animation on scroll
var scroll = window.requestAnimationFrame
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 850)
    );
    // return (
    //     (rect.top <= 0
    //       && rect.bottom >= 0)
    //     ||
    //     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
    //       rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    //     ||
    //     (rect.top >= 0 &&
    //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    //   );
}

////////////////////// parallax

// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.parallax')
 
// The parallax function
const parallax = elements => {
	if ('undefined' !== elements && elements.length > 0) {
		elements.forEach( element => {
			let y = window.innerHeight - element.getBoundingClientRect().top
			if (y > 0) {
				element.style.transform = 'translate3d(0, -' + (0.2 * y) + 'px, 0)'
			}
		})
	}
}
 
//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
	parallax(parallaxElements)
}

const payoffbutton = document.querySelector('.payOffButton');
const payOffInvisibleText = document.querySelector('.payOffInvisibleText');
payoffbutton.onclick = function(){
  payOffInvisibleText.classList.add('payOffVisibleText')
  payoffbutton.classList.add('payOffVisibleButton')
}