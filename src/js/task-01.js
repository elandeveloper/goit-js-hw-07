const categoryItemEls = document.querySelectorAll(".item");
console.log(`В списке ${categoryItemEls.length} категории`);

const countCategoryItems = (el) => {
  const headEL = el.firstElementChild;
  const headElTextContent = headEL.textContent;

  const itemsEl = el.querySelectorAll(".item li");
  const itemsQuantity = itemsEl.length;

  console.log(
    `Категория: ${headElTextContent}. Количество элементов: ${itemsQuantity}`
  );
};

categoryItemEls.forEach(countCategoryItems);
