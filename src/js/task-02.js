const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientEl = (ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
};

const ingredientList = document.querySelector("#ingredients");

ingredientList.append(...ingredients.map(createIngredientEl));
