const formFill = document.getElementById("form");
const submit = document.getElementById("submit-button");
const links = document.querySelectorAll("links");
const reset = documetn.getElementById("reset-button");
const inputReset = document.querySelectorAll(".input");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Form submitted");
});

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  form.reset();
});



  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
