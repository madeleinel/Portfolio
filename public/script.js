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
