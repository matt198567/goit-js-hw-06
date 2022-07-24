const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);
  event.currentTarget.reset();
});

function validate_form() {
  valid = true;

  if (
    document.contact_form.contact_email.value == "" &&
    document.contact_form.contact_password.value == ""
  ) {
    alert(
      "Пожалуйста заполните поле 'email'." &&
        "Пожалуйста заполните поле 'password'."
    );
    valid = false;
  }

  return valid;
}
