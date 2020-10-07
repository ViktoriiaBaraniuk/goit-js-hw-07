
/* 1.Скрипт для создания галлереи изображений по массиву данных.
2.Добавь оформление галереи флексбоксами */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const picture = document.querySelector('#gallery');
const imagesList = images.reduce((string, item) => 
  string + `<li><img src = ${item.url} alt = '${item.alt}' width="650" height="450" class="item"></li>`, ''
)
picture.insertAdjacentHTML('afterbegin', imagesList);
picture.classList.add("images");
 

