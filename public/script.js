// Go to path "/about" when click on landing page svg
// Have to set it up as a function, as adding a link within the svg did not function on touchscreen
function enterSite() {
  window.location.pathname = "/about";
}

const icon = document.getElementById("navToggleIcon");
const navbar = document.getElementById("topNav");
// Set up dropdown menu for small screens
function toggleMenu() {
  if (navbar.id === "topNav") {
    navbar.id += "_responsive";   // Change id of element to 'topNav_responsive'
  } else {
    navbar.id = "topNav";   // If id name is already 'topNav_responsive', change it back to 'topNav'
  }
}

// Set up section toggling within the Portfolio page
function togglePopup(buttonId) {
  // buttonId = The class name of the button that was clicked
  // Set the popup ID to be "popup_" followed by the second half of the buttonId (ie the id number of the section)
  // This will be used to display the popup that's within the same section as the clicked button
  let id = buttonId.split("_");
  let popupId = "popup_" + id[1];
  let currentPopup = document.getElementById(popupId);
  let sectionId = "section_" + id[1];
  let currentButton = document.querySelector("#" + sectionId + " span:last-child");
  let currentButtonText = document.querySelector("#" + sectionId + " span:last-child button");

  // To toggle the popup: Hide if it's visible, and make visible if it's hidden
  // Also update the background colour of the clicked button when the popup is visible, to indicate that it is currently "active"
  if (currentPopup.style.display == "block") {
    currentPopup.style.display = "none";
    // currentButton.style.backgroundImage = "url('images/chalkboard.jpg')";
    currentButton.style.borderColor = "#333";
    currentButtonText.textContent = "Find out more ⇓";
  } else {
    currentPopup.style.display = "block";
    // currentButton.style.backgroundImage = "url('images/redChalkboard.png')";
    currentButton.style.borderColor = "#92626F";
    currentButtonText.textContent = "Find out more ⇑";
  }
}
