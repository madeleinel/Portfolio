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

  document.getElementById('navIcon').addEventListener('click', toggleMenu, false);

}
