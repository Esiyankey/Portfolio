const form = document.getElementById("form");
const submit = document.getElementById("submitButton");
const links = document.querySelectorAll(".links");
const reset = document.getElementById("resetButton");
const inputReset = document.querySelectorAll(".input");
const Bars = document.getElementById("bars");
const showLinks = document.getElementById("showLinks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

 alert("form submitted")
});



function handleReset (e) {
  e.preventDefault();
  form.reset();
};

function handleShowLinks () {
  showLinks.classList.toggle("show");
};



links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("active");
    links.forEach((link) => {
      if (link !== this) {
        link.classList.remove("active");
      }
    });
  });
});


