const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  verifyEmail();
});

function verifyEmail() {
  errorMessage.style.color = "red";

  if (emailInput.validity.valueMissing) {
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
  } else if (emailInput.validity.patternMismatch) {
    errorMessage.innerHTML = "Please provide a valid email address";
  } else {
    errorMessage.innerHTML = "";
  }
}
