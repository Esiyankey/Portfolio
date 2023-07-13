const form = document.getElementById("form");
const submit = document.getElementById("submitButton");
const links = document.querySelectorAll(".links");
const reset = document.getElementById("resetButton");
const inputReset = document.querySelectorAll(".input");
const Bars = document.getElementById("bars");
const showLinks = document.getElementById("showLinks");

function handleSubmit (e) {
  e.preventDefault();
  alert("Form submitted");
  console.log("heya there")
};
function handleReset (e) {
  e.preventDefault();
  form.reset();
};

function handleShowLinks () {
  showLinks.classList.toggle("show");
};

// submit.addEventListener('click', handleSubmit);
// reset.addEventListener('click', handleReset);
// Bars.addEventListener('click', function(){
//   console.log("helloworld")
// });

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


