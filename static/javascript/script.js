// Text Gradient
const textElement = document.getElementById("txt2");
const text = textElement.textContent;

textElement.textContent = "";

for (let letter of text) {
  const span = document.createElement("span");
  span.textContent = letter;
  span.classList.add("gradient-letter");
  textElement.appendChild(span);
}
