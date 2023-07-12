const form = document.getElementById("form");
const submit = document.getElementById("submit-button");
const links = document.querySelectorAll(".links");
const reset = document.getElementById("reset-button");
const inputReset = document.querySelectorAll(".input");
const Bars = document.getElementById("bars");
const showLinks = document.getElementById("show-links");

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Form submitted");
};

const handleReset = (e) => {
  e.preventDefault();
  form.reset();
};

const handleShowLinks = () => {
  showLinks.classList.toggle("show");
};

submit.addEventListener("click", handleSubmit);
reset.addEventListener("click", handleReset);
Bars.addEventListener("click", handleShowLinks);

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


