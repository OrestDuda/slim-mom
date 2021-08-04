const getLoadingFood = state => state.food.loading;
const getFoodFilter = state => state.food.foodFilter;
const getFood = state => state.food.food;
const foodSelectors = {
  getLoadingFood,
  getFoodFilter,
  getFood,
};

export default foodSelectors;
