const getMealsId = state => state.meals.meals._id;

const getMealsDate = state => {
  if (state.meals.meals.error) {
    return state.meals.meals.error;
  }
  if (!state.meals.meals.dayJournal) {
    return [];
  }

  return state.meals.meals.dayJournal.food;
};

const getFood = state => state.meals.meals.food;

const getLoadingMeals = state => state.meals.loading;

const getDate = state => state.meals.setDate;

const mealsSelectors = {
  getMealsId,
  getFood,
  getLoadingMeals,
  getMealsDate,
  getDate,
};

export default mealsSelectors;
