const categorieItems = document.querySelectorAll('.item');

console.log(`Number of categories:${categorieItems.length}`);

categorieItems.forEach(item => {
    const categoriesTitle = item.querySelector('h2');
    console.log(`Category:${categoriesTitle.textContent}`);
    const categoriesElements = item.querySelectorAll('li');
    console.log(`Elements:${categoriesElements.length}`);
});

