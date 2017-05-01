// Set up dropdown menu for small screens

// window.addEventListener("load", () => {   // Enable the below functions on page load

  const icon = document.getElementById("navToggleIcon");
  const navbar = document.getElementById("topNav");

  function toggleMenu() {

    // ["click", "touchstart"].forEach( input => {   // Could use touchstart only ; supposed to work on touch and click >> tried and it didn't work
      // icon.addEventListener("click", (e) => {
      //   e.preventDefault()    // Prevent 'click' to be triggered as well when tapping on the icon using touch screens

        if (navbar.id === "topNav") {
          navbar.id += "_responsive";   // Change id of element to 'topNav_responsive'
        } else {
          navbar.id = "topNav";   // If id name is already 'topNav_responsive', change it back to 'topNav'
        }
      // }, false);
    // });
  }

// }, false);

// icon.addEventListener("click", (e) => {
//   if (navbar.id === "topNav") {
//     navbar.id += "_responsive";
//   } else {
//     navbar.id = "topNav";
//   }
// });
