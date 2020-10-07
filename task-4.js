/* Счётчик */

let counterValue = 0;

const btn = document.querySelector('#counter');
const decrementBtn = btn.querySelector('[data-action=decrement]');
const incrementBtn = btn.querySelector('[data-action=increment]');
const valueNumber = btn.querySelector('#value');
const updateValueNumber = function () {
  valueNumber.textContent = counterValue;
};

const increment = function () {
  counterValue += 1;
  updateValueNumber();
};
const decrement = function () {
  counterValue -= 1;
  updateValueNumber();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);