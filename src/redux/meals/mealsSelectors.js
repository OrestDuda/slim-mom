const getMealsId = state => state.meals.meals._id;

<<<<<<< Updated upstream
const getMealsDate = state => state.meals.meals.onDay;

=======
>>>>>>> Stashed changes
const getFood = state => state.meals.meals.food;

const getLoadingMeals = state => state.meals.loading;

<<<<<<< Updated upstream
const mealsSelectors = { getMealsId, getFood, getLoadingMeals, getMealsDate };
=======
const getDate = state => state.meals.setDate;

const mealsSelectors = {
  getMealsId,
  getFood,
  getLoadingMeals,
  getDate,
};
>>>>>>> Stashed changes

export default mealsSelectors;
