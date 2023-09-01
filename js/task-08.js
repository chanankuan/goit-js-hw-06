const form = document.querySelector('.login-form');

const onSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert('Усі поля повинні бути заповнені');
  }

  return console.log({
    email: email.value,
    password: password.value,
  });
};

form.addEventListener('submit', onSubmit);
