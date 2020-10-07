 /* Проверяет содержимое  инпута на правильное количество символов. */

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  inputEl.classList.add('invalid');
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.replace('invalid', 'valid');
  }     
};

