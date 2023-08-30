const listItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const itemCount = item.lastElementChild.childElementCount;
  console.log(`Category: ${categoryName}\nElements: ${itemCount}`);
});
