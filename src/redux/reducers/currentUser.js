const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

export const updateCurrentUser = (currentUserObj) => ({
  type: UPDATE_CURRENT_USER,
  payload: currentUserObj,
});

const currentUser = (state = {id: 'ln92211akDPPc3'}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER: {
      const newState = {...state};
      newState.id = action.payload.id
          ? action.payload.id
          : newState.id;
      newState.firstName = action.payload.firstName
          ? action.payload.firstName
          : newState.firstName;
      newState.lastName = action.payload.lastName
          ? action.payload.lastName
          : newState.lastName;
      newState.dob = action.payload.dob
          ? action.payload.dob
          : newState.dob;
      newState.country = action.payload.country
          ? action.payload.country
          : newState.country;

      return newState;
    }
    default:
      return state;
  }
};

export default currentUser;
