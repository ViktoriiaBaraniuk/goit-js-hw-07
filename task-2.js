
/* Для каждого элемента массива ingredients создаёт отдельный li, 
за одну операцию добавляет все li в список ul.ingredients. */
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listOfIngredients = ingredients.map((element) => {
    const listOfItems = document.createElement('li');
    listOfItems.textContent = element;
    return listOfItems;
  });

const list = document.querySelector('#ingredients');
list.append(...listOfIngredients);
