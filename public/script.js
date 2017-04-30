// Toggle the navbar on smaller screens
// Set up dropdown menu on smaller screens

const navbar = document.getElementById("topNav");
const icon = document.getElementById("navIcon");

icon.addEventListener("click touchstart", (e) => {

  console.log(navbar.className);

  if (navbar.id === "topNav") {
    navbar.id += "_responsive";
    // navbar.style.display = "block";

    console.log(navbar.id);
    console.log(navbar);
  } else {
    navbar.id = "topNav";

    console.log(navbar.id);
  }
})
