


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  console.log("toggling show") 
  document.getElementById("navDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    console.log("dropdown button activated")
    var dropdown = document.getElementById("navDropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
  }
}


