const getIsLoggedIn = (state: { user: { isLoggedIn: any; }; }) => state.user.isLoggedIn;
const getUserName = (state: { user: { user: { name: any; }; }; }) => state.user.user.name;
const getToken = (state: { user: { token: any; }; }) => state.user.token;
const getIsFetching = (state: { user: { isFetching: any; }; }) => state.user.isFetching;

const userSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsFetching,
};

export default userSelectors;