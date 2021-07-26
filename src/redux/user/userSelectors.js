const getIfLoggedIn = (state) => state.user.loggedIn;

const getUser = (state) => state.user.user;

const getUserId = (state) => state.user.user._id;

const userSelectors = {
  getIfLoggedIn,
  getUser,
  getUserId,
};

export default userSelectors;
