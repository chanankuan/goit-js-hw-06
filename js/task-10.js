const boxes = document.getElementById('boxes');
const controlArea = document.getElementById('controls');
const input = controlArea.firstElementChild;
const createBtn = input.nextElementSibling;
const destroyBtn = controlArea.lastElementChild;
let initialSize = 30;

createBtn.addEventListener('click', () => createBoxes(input.value));
destroyBtn.addEventListener('click', destroyBoxes);

// Функція для створення колекції. Можна додавати безкінечно кількість разів.
function createBoxes(amount) {
  const markupArray = [];
  const lastEl = boxes.lastElementChild;
  let size = lastEl ? Number(lastEl.dataset.size) + 10 : initialSize;

  for (let i = 0; i < amount; i += 1) {
    markupArray.push(`
        <div data-size="${size}" style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>
      `);

    size += 10;
  }

  boxes.insertAdjacentHTML('beforeend', markupArray.join(''));
}

// Функція для очищення колекції
function destroyBoxes() {
  boxes.innerHTML = '';
}

// Функція для генерації рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
