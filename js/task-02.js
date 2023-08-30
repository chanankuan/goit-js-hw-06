const list = document.getElementById('ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  markup.push(li.outerHTML);
});

list.insertAdjacentHTML('beforeend', markup.join(''));
