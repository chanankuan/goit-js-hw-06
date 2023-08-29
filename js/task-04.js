(() => {
  const decrementButton = document.querySelector('[data-action=decrement]');
  const incrementButton = document.querySelector('[data-action=increment]');
  const display = document.querySelector('#value');
  let counterValue = 0;

  const increment = () => {
    counterValue += 1;
    updateDisplay(counterValue);
  };

  const decrement = () => {
    counterValue -= 1;
    updateDisplay(counterValue);
  };

  const updateDisplay = (value) => {
    display.textContent = value;
  };

  decrementButton.addEventListener('click', decrement);
  incrementButton.addEventListener('click', increment);
})();
