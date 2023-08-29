(() => {
  const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', () => {
    input.value === ''
      ? (output.textContent = 'Anonymous')
      : (output.textContent = input.value);
  });
})();
