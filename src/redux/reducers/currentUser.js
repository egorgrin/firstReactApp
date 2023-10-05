const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

let initialState = {
  id: null,
  firstName: null,
  lastName: null,
  dob: null,
  country: null,
  followers: null,
  friends: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export const updateCurrentUser = (currentUserObj) => ({
  type: UPDATE_CURRENT_USER,
  payload: currentUserObj,
});

export default currentUser;
