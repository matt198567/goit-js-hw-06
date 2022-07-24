const inputValidation = document.getElementById("validation-input");
const totalMax = inputValidation.getAttribute("data-length");

inputValidation.oninput = () => {
  if (inputValidation.value.length === totalMax) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
};
