// send message to my email when click sendEmail button

const emailBtn = document.getElementById('sendEmail');

emailBtn.addEventListener('click', (e) => {
  // take content from form fields and transform it into an email
});

// Make the navbar change on scroll
( function() {
  const navBar = document.getElementById('nav');
  let navLinks = document.getElementsByClassName('nav__link');
  navLinks = Array.from(navLinks);
  document.getElementById('navBox').style.display = 'none';
  let windowHeight = window.innerHeight - navBar.clientHeight;

  window.addEventListener('scroll', (e) => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scroll > windowHeight) {
      navBar.className = 'nav--onScroll';
      navLinks.forEach( (e) => {
        e.className = 'nav__link nav_link--white';
      });
      return;
    }
    navBar.className = '';
    navLinks.forEach( (e) => {
      e.className = 'nav__link';
    });
  });
})();


// Hide the header (apart from the nav bar) when scroll down the page, from the landing page onto the main part of the site

// one idea: add and remove CSS classes from an element in response to a scroll event >> http://wicky.nillia.ms/headroom.js/

// const header = document.getElementById('headerUnpinned');
// const navBar = document.getElementById('headerPinned');
// const nav = document.querySelectorAll('#headerPinned');
//
// window.addEventListener('scroll', (e) => {
//
//   if (e.srcElement.body.scrollTop < 100) {
//     // full header should display
//     console.log("under 100!")
//     // nac.style.top =
//   } else if (e.srcElement.body.scrollTop >= 100) {
//     // only the nav bar should display
//     console.log("over 100!");
//   }
//
//   // header.style.display = "none";
//   // navBar.style.position = "fixed";
//   // navBar.style.top = 0;
//   // navBar.style.left = 0;
//   // console.log(e);
//   // console.log(e.srcElement.body.scrollTop);
//   console.log(nav);
// });

// console.log(header);
// console.log(navBar);

// then reverse when scroll back to top of page, so:
// when e.srcElement.body.scrollTop === <= 100 (good value?)
// display the full header again



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
  var x = document.getElementsByClassName("slides");
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
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " currentImage";
}
