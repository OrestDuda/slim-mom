const getMealsId = state => state.meals.meals._id;

const getFood = state => state.meals.meals.food;

const getLoadingMeals = state => state.meals.loading;

const mealsSelector = { getMealsId, getFood, getLoadingMeals };

export default mealsSelector;
