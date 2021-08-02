import { createSelector } from '@reduxjs/toolkit';

const getLoadingFood = state => state.food.loading;

const getFoodFilter = state => state.food.foodFilter;

const getFood = state => state.food.food;
/**
 * Option 1 START - get by query
 */

// const getFilteredFood = createSelector(
//   [getFood, getFoodFilter],
//   (food, foodFilter) => {
//     const normalizedFilter = foodFilter.toLowerCase();
//     if (food) {
//       return food.filter(food =>
//         food.title.ru.toLowerCase().includes(normalizedFilter),
//       );
//     }
//     return [];
//   },
// );
/**
 * Option 1 END - get by query
 */

const foodSelectors = {
  getLoadingFood,
  getFoodFilter,
  getFood,
  /**
   * Option 1 START- get by query
   */
  // getFilteredFood,
  /**
   * Option 1 END- get by query
   */
};

export default foodSelectors;
