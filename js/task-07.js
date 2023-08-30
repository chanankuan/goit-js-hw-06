(() => {
  const slider = document.getElementById('font-size-control');
  const text = document.getElementById('text');

  const onInput = ({ currentTarget }) => {
    const fontSize = currentTarget.value;
    text.style.fontSize = fontSize + 'px';
  };

  slider.addEventListener('input', onInput);
})();
