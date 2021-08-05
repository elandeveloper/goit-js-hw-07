const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const items = makeIngredientsItems(ingredients);
ingredientsEl.append(...items);
console.log(ingredientsEl);
