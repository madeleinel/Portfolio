// Setting up portfolio slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("pSlides");
  var dots = document.getElementsByClassName("chooseImage");

  if (n > x.length) {
    slideIndex = 1;
  }  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" currentImage", "");
  }

// NEED TO UNCOMMENT THE 2 BELOW LINES TO MAKE THE SLIDESHOW WORK:

  // x[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " currentImage";
}

// Setting up modal pop-ups

// Get the modal
const aboutModal = document.getElementById("aboutModal");
const skillsModal = document.getElementById("skillsModal");
const experModal = document.getElementById("experModal");
const portModal = document.getElementById("portModal");

// Get the button that opens the modal
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const experBtn = document.getElementById("experBtn");
const portBtn = document.getElementById("portBtn");

// Get the <span> element that closes the modal
// let closeBtn = document.querySelectorAll(".closeBtn")[0];
const closeAbtBtn = document.getElementById("closeAbtBtn");
const closeSksBtn = document.getElementById("closeSksBtn");
const closeExpBtn = document.getElementById("closeExpBtn");
const closePrtBtn = document.getElementById("closePrtBtn");

// When the user clicks on the button, open the modal
aboutBtn.onclick = function() {
  aboutModal.style.display = "block";
  skillsModal.style.display = "none";
  experModal.style.display = "none";
  portModal.style.display = "none";
}
skillsBtn.onclick = function() {
  skillsModal.style.display = "block";
  aboutModal.style.display = "none";
  experModal.style.display = "none";
  portModal.style.display = "none";
}
experBtn.onclick = function() {
  experModal.style.display = "block";
  aboutModal.style.display = "none";
  skillsModal.style.display = "none";
  portModal.style.display = "none";
}
portBtn.onclick = function() {
  portModal.style.display = "block";
  aboutModal.style.display = "none";
  skillsModal.style.display = "none";
  experModal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeAbtBtn.onclick = function() {
  aboutModal.style.display = "none";
}
closeSksBtn.onclick = function() {
  skillsModal.style.display = "none";
}
closeExpBtn.onclick = function() {
  experModal.style.display = "none";
}
closePrtBtn.onclick = function() {
  portModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == aboutModal) {
//     aboutModal.style.display = "none";
//   } if (event.target == skillsModal) {
//     skillsModal.style.display = "none";
//   }
// }
