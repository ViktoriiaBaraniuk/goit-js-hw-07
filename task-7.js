const inputController = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
inputController.addEventListener('input', onInputChange);
function onInputChange(event) {
  textSize.style.fontSize = event.currentTarget.value + 'px'; 
};
