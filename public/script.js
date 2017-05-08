// Set up dropdown menu for small screens

const icon = document.getElementById("navToggleIcon");
const navbar = document.getElementById("topNav");

function toggleMenu() {
  if (navbar.id === "topNav") {
    navbar.id += "_responsive";   // Change id of element to 'topNav_responsive'
  } else {
    navbar.id = "topNav";   // If id name is already 'topNav_responsive', change it back to 'topNav'
  }
}

// Go to path "/about" when click on landing page svg
// Have to set it up as a function, as adding a link within the svg did not function on touchscreen
function enterSite() {
  window.location.pathname = "/about";
}
