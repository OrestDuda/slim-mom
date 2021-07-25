const getIfLoggedIn = state => state.authentication.loggedIn;

const getUserName = state => state.authentication.user.name;

const authSelectors = {
  getIfLoggedIn,
  getUserName,
};

export default authSelectors;
