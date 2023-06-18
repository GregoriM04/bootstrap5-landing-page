/* Back to top button functionality */
let mybutton = document.getElementById("btn-back-to-top");

// When scrolling down 40px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When clicking on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* Tooltip function */
const tooltip = document.querySelectorAll(".tt");
tooltip.forEach(t => new bootstrap.Tooltip(t));