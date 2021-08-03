const getIfLoggedIn = state => state.user.loggedIn;

const getUser = state => state.user.user;

const getUserId = state => state.user.user._id;

const getUserNotRecommendedFood = state => state.user.user.notRecommended;
const getUserDailyLimit = state => state.user.user.dailyLimit;

const getPublicUser = state => state.user.publicUser;

const userSelectors = {
  getIfLoggedIn,
  getUser,
  getUserId,
  getUserNotRecommendedFood,
  getPublicUser,
  getUserDailyLimit,
};

export default userSelectors;
