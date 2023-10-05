const AUTH_ADMIN = 'AUTH_ADMIN';

let initialState = {
  id: null,
  userName: null,
  firstName: null,
  lastName: null,
  dob: null,
  country: null,
  followers: null,
  friends: null,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ADMIN: {
      let newState = {...state, ...action.payload}
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
};

export const updateCurrentUser = (admin) => ({
  type: AUTH_ADMIN,
  payload: admin,
});

export default admin;
