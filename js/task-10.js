(() => {
  const boxes = document.getElementById('boxes');
  const controlArea = document.getElementById('controls');
  const input = controlArea.firstElementChild;
  const createBtn = input.nextElementSibling;
  const destroyBtn = controlArea.lastElementChild;
  let size = 30;

  createBtn.addEventListener('click', () => createBoxes(input.value));
  destroyBtn.addEventListener('click', destroyBoxes);

  // Функція для створення колекції. Можна додавати безкінечно кількість разів.
  function createBoxes(amount) {
    const markupArray = [];
    let i = 0;

    for (let i = 0; i < amount; i += 1) {
      size += 10;
      markupArray.push(`
        <div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>
      `);
    }

    boxes.insertAdjacentHTML('beforeend', markupArray.join(''));
  }

  // Функція для очищення колекції
  function destroyBoxes() {
    boxes.innerHTML = '';
    size = 30;
  }

  // Функція для генерації рандомного кольору
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
})();
