const categoriesEl = document.querySelectorAll('.item');
console.log(`'В списке ${categoriesEl.length} категории.'`);

const getCategory = category => {
    const categoryTitleEl = category.querySelector('h2');
    const categoryTitleContent = categoryTitleEl.textContent;

    const partOfCategory = category.querySelectorAll("li");
    const countPartOfCategory = partOfCategory.length;

    return `- Категория: ${categoryTitleContent}
- Количество елементов: ${countPartOfCategory}`;
};
    
categoriesEl.forEach(category => console.log(getCategory(category)));
