const inputEl = document.querySelector('#name-input');
const outputEL = document.querySelector('#name-output');
inputEl.addEventListener('input', event => {
    outputEL.textContent = inputEl.value !== '' ? event.currentTarget.value : 'незнакомец';
});

    
