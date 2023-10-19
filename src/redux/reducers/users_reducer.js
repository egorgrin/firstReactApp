let SET_USERS = 'SET_USERS'

export default (users = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return users;
  }
};

export const setUsers = (users) => ({
  type: SET_USERS,
  users: users,
});