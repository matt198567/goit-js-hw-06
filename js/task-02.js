const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.innerHTML = ingredient;
  return items;
});
ulList.append(...foodIngredients);
console.log(foodIngredients);
