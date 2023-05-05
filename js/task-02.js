const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeElementIngredients = options => {
  return options.map(option => {
    const itemElement = document.createElement('li');
    itemElement.textContent = option;
    itemElement.classList.add('item');
  
    return itemElement;
  });
};

const elements = makeElementIngredients(ingredients);

ingredientsList.append(...elements);

console.log(ingredientsList);
