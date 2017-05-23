// Set up dropdown menu for small screens
function toggleMenu(e) {
  e.preventDefault(); // Prevent the function from executing twice on touchscreens due to double calls to the eventListener function ("click" and "touch")
  const navbar = document.getElementById("topNav");
  if (navbar.className === "navBar") {
    navbar.className += " responsive";   // Change the class of element to 'navBar responsive'
  } else {
    navbar.className = "navBar";   // If the class is already 'navBar responsive', change it back to 'navBar'
  }
}
document.getElementById("navToggleIcon").addEventListener("click", toggleMenu, false);

// Set up section toggling within the Portfolio page
function togglePopup(buttonId) {
  // buttonId = The class name of the button that was clicked
  // Set the popup ID to be "popup_" followed by the second half of the buttonId (ie the id number of the section)
  // This will be used to display the popup that's within the same section as the clicked button
  const idTags = buttonId.split("_");
  const popupId = "popup_" + idTags[1];
  const currentPopup = document.getElementById(popupId);
  const sectionId = "section_" + idTags[1];
  const currentButton = document.querySelector("#" + sectionId + " span:last-child");
  const currentButtonText = document.querySelector("#" + sectionId + " span:last-child button");

  // To toggle the popup: Hide if it's visible, and make visible if it's hidden
  // Also update the background colour of the clicked button when the popup is visible, to indicate that it is currently "active"
  if (currentPopup.style.display == "block") {
    currentPopup.style.display = "none";
    currentButton.style.borderColor = "#333";
    currentButtonText.textContent = "Find out more ⇓";
    window.location.href = ("/portfolio\#" + sectionId);  // Makes the window jump back to the top of the section the user was just looking at > to avoid the screen seemingly jumping to a later section, and skipping work examples, when closing a popup section
  } else {
    currentPopup.style.display = "block";
    currentButton.style.borderColor = "#92626F";
    currentButtonText.textContent = "Find out more ⇑";
  }
}

// Replaced with a link over the landing page:
// Go to path "/about" when click on landing page svg
// Have to set it up as a function, as adding a link within the svg did not function on touchscreen
// function enterSite() {
//   window.location.href = "/about";
// }
// document.getElementById("landingPage").addEventListener("click", enterSite);
