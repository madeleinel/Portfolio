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

// To set up section toggling within the Portfolio page
function displayPopup(buttonId) {
  // buttonId = Which button was clicked
  // Set the popup ID to be "popup_" followed by the second half of the buttonId (ie the id number of the section)
  // This will be used to display the popup that's within the same section as the clicked button
  let id = buttonId.split("_");
  let popupId = "popup_" + id[1];
  let currentPopup = document.getElementById(popupId);
  let sectionId = "section_" + id[1];
  // let currentSection = document.getElementById(sectionId);
  let currentButton = document.querySelector("." + sectionId + " span:last-child");
  console.log(id);
  console.log(popupId);
  console.log(currentPopup);
  console.log(sectionId);
  console.log(currentButton);

  // To toggle the popup: Hide if it's visible, and make visible if it's hidden
  // Also update the background colour of the clicked button when the popup is visible, to indicate that it is currently "active"
  if (currentPopup.style.display == "block") {
    currentPopup.style.display = "none";
    // currentButton.style.backgroundColor = "#92626F";
    currentButton.style.backgroundImage = "url('images/chalkboard.jpg')";
  } else {
    currentPopup.style.display = "block";
    // currentButton.style.backgroundColor = "#333";
    currentButton.style.backgroundImage = "url('images/redChalkboard.png')";
  }
}
