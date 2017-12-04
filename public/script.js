'use strict';

window.onload = () => {

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const mainNav = document.getElementById('mainNav');

    if (mainNav.className === 'navBar') {
      console.log('dropdown active');
      mainNav.className += ' responsive';
      console.log(mainNav.className);
    } else {
      console.log('dropdown inactive');
      mainNav.className = "navBar";
      console.log(mainNav.className);
    }
  }

  // document.getElementById('navIcon').addEventListener('click', toggleMenu, false);

  // Add Google Analytics script


  const fixMenuToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const mainNav = document.getElementById('mainNav');

    // when the nav bar hits the top of the page; fix it to the top
    // when scroll back up again; remove the fixed positioning
  }



  // /////// From FAC10 PAMF week1 //////
  //   // add fade in to nav bar on scroll
  // (function () {
  //   var nav = document.getElementById('Navigation');
  //   var navLinks = document.getElementsByClassName('navigation__link');
  //   navLinks = Array.from(navLinks);
  //   document.getElementById('navbox').style.display = 'none';
  //   var windowSize = window.innerHeight - nav.clientHeight;
  //
  //   window.addEventListener("scroll", function (e) {
  //     var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     if (scroll > windowSize) {
  //       nav.className = 'navigation--onscroll';
  //       navLinks.forEach(function (e) {
  //         e.className = 'navigation__link navigation__link--white';
  //       });
  //       return;
  //     }
  //     nav.className = '';
  //     navLinks.forEach(function (e) {
  //       e.className = 'navigation__link';
  //     });
  //   });
  // })();
  // ///////////

}

// /////// From FAC10 PAMF week1 //////
//   // add fade in to nav bar on scroll
// (function () {
//   var nav = document.getElementById('Navigation');
//   var navLinks = document.getElementsByClassName('navigation__link');
//   navLinks = Array.from(navLinks);
//   document.getElementById('navbox').style.display = 'none';
//   var windowSize = window.innerHeight - nav.clientHeight;
//
//   window.addEventListener("scroll", function (e) {
//     var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     if (scroll > windowSize) {
//       nav.className = 'navigation--onscroll';
//       navLinks.forEach(function (e) {
//         e.className = 'navigation__link navigation__link--white';
//       });
//       return;
//     }
//     nav.className = '';
//     navLinks.forEach(function (e) {
//       e.className = 'navigation__link';
//     });
//   });
// })();
// ///////////
