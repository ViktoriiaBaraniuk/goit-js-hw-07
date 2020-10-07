const inputEl = document.querySelector('#name-input');
const outputEL = document.querySelector('#name-output');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    inputEl.value != ''? outputEL.textContent = event.currentTarget.value : outputEL.textContent = 'незнакомец';
};
    
