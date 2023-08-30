(() => {
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  const onInput = (e) => {
    let inputValue = e.currentTarget.value;

    inputValue === ''
      ? (output.textContent = 'Anonymous')
      : (output.textContent = input.value);
  };
  input.addEventListener('input', onInput);
})();
