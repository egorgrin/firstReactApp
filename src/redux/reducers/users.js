let FETCH_USERS = 'FETCH_USERS'
let CREATE_USER = 'CREATE_USER'

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case CREATE_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};