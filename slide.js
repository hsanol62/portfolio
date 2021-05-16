// var slideIndex = 0; //slide index

// // HTML 로드가 끝난 후 동작
// window.onload=function(){
//   showSlides(slideIndex);

//   // Auto Move Slide
//   var sec = 3000;
//   setInterval(function(){
//     slideIndex++;
//     showSlides(slideIndex);

//   }, sec);
// }


// // Next/previous controls
// function moveSlides(n) {
//   slideIndex = slideIndex + n
//   showSlides(slideIndex);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   slideIndex = n;
//   showSlides(slideIndex);
// }

// function showSlides(n) {

//   var slides = document.getElementsByClassName("slide-image");
//   var dots = document.getElementsByClassName("single-dot");
//   var size = slides.length;

//   if ((n+1) > size) {
//     slideIndex = 0; n = 0;
//   }else if (n < 0) {
//     slideIndex = (size-1);
//     n = (size-1);
//   }

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[n].style.display = "block";
//   dots[n].className += " active";
// }
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  


  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}