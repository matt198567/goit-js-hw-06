function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = {
  bodyBackgroundColor: document.body,
  chengeColorButton: document.querySelector(".change-color"),
  requiredColor: document.querySelector(".color"),
};

randomColor.chengeColorButton.addEventListener("click", onchangeColorButton);

function onchangeColorButton() {
  let color = getRandomHexColor();
  randomColor.bodyBackgroundColor.style.backgroundColor = color;
}
