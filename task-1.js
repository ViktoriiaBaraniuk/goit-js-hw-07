
/* 1 Считает и выводит в консоль количество категорий в ul#categories */

const listOfItems = document.querySelectorAll('.item');
const lengthListOfItems  = listOfItems.length;
console.log(`В списке ${lengthListOfItems} категории`);

/* const navItemEl = document.querySelector('#categories');
const lengthNavItemEl = navItemEl.children.length;
console.log(`В списке ${lengthNavItemEl} категории`); */


/* 2. Выводит в консоль текст заголовка элемента(тега h2) и количество элементов в
категории */
listOfItems.forEach(item => console.log(`Категория: ${item.querySelector('h2').textContent}\n`, `Количество: ${ item.querySelectorAll('li').length}`));










