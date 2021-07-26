import { createSelector } from '@reduxjs/toolkit';

const getLoadingFood = state => state.food.loading;

const getFoodFilter = state => state.food.foodFilter;

const getFood = state => state.food.food;

const getFilteredFood = createSelector(
  [getFood, getFoodFilter],
  (food, foodFilter) => {
    const normalizedFilter = foodFilter.toLowerCase();
    return food.filter(food =>
      food.title.ru.toLowerCase().includes(normalizedFilter),
    );
  },
);

const foodSelectors = {
  getLoadingFood,
  getFoodFilter,
  getFood,
  getFilteredFood,
};

export default foodSelectors;
