// Создание нового элемента и добавление его внизу блока с помощью метода append
const block1 = document.createElement('div');
block.id = 'block1';
document.body.appendChild(block1);

const Elements = document.createElement('div');
block1.appendChild(Elements);

// Создание нового элемента и вставка его перед блоком с помощью метода insertBefore
const block2 = document.createElement('div');
block2.id = 'block2';
document.body.appendChild(block2);

const Element2 = document.createElement('div');
document.body.insertBefore(Element2, block2);

// Удаление тега 'p' из блока с помощью метода removeChild
const block3 = document.createElement('div');
block3.id = 'block3';
document.body.appendChild(block3);

const pElement = block3.querySelector('p');
if (pElement) {
  block3.removeChild(pElement);
}

// Замена тега 'p' на <i>Hello World</i> с помощью метода replaceChild
const block4 = document.createElement('div');
block4.id = 'block4';
document.body.appendChild(block4);

const pElement2 = block4.querySelector('p');
if (pElement2) {
  const Element3 = document.createElement('i');
  newElement3.textContent = 'Hello World';
  block4.replaceChild(Element3, pElement2);
}

// Вывод в консоль коллекции всех элементов с классом .block
const elements = document.getElementsByClassName('block');
console.log(elements);

// Вывод в консоль первого элемента из ранее созданной коллекции
console.log(elements[0]);

// Вывод в консоль количества элементов в ранее созданной коллекции
console.log(elements.length);
