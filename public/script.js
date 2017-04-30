// Set up dropdown menu for small screens

const icon = document.getElementById("navToggleIcon");
const navbar = document.getElementById("topNav");

["click", "touchstart"].forEach( input => {
  icon.addEventListener(input, (e) => {
    e.preventDefault()    // Prevent 'click' to be triggered as well when tapping on the icon using touch screens
    if (navbar.id === "topNav") {
      navbar.id += "_responsive";   // Change id of element to 'topNav_responsive'
    } else {
      navbar.id = "topNav";   // If id name is already 'topNav_responsive', change it back to 'topNav'
    }
  });
});

// icon.addEventListener("click", (e) => {
//   if (navbar.id === "topNav") {
//     navbar.id += "_responsive";
//   } else {
//     navbar.id = "topNav";
//   }
// });
