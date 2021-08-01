const getMealsId = state => state.meals.meals._id;

const getMealsDate = state => state.meals.meals.onDay;

const getFood = state => state.meals.meals.food;

const getLoadingMeals = state => state.meals.loading;

const mealsSelectors = { getMealsId, getFood, getLoadingMeals, getMealsDate };
const getDate = state => state.meals.setDate;

const mealsSelectors = {
  getMealsId,
  getFood,
  getLoadingMeals,
  getDate,
};

export default mealsSelectors;
