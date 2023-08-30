const displayColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeColor);

function changeColor() {
  const pickColor = getRandomHexColor();
  document.body.style.backgroundColor = pickColor;
  displayColor.textContent = pickColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
