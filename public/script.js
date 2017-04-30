// Set up dropdown menu for small screens

const icon = document.getElementById("navIcon");
const navbar = document.getElementById("topNav");

["click", "touchstart"].forEach( input => {
  icon.addEventListener(input, (e) => {
    e.preventDefault()
    if (navbar.id === "topNav") {
      navbar.id += "_responsive";
    } else {
      navbar.id = "topNav";
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
