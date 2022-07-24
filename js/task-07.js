const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.oninput = () => {
  textEl.style.fontSize = inputEl.value + "px";
};
