const AUTH_USER = 'AUTH_USER';
const SET_USER = 'SET_USER';
const SIGN_OUT = 'SIGN_OUT';

const initialStale = {
  data: {
    id: null,
    username: null,
  },
  isAuth: false,
};

const auth_reducer = (state = initialStale, action) => {
  switch (action.type) {
    case AUTH_USER: {
      let newState = {
        data: {...state.data, ...action.data},
        isAuth: true,
      };
      // console.log(newState);
      return newState;
    }
    case SET_USER: {
      return {...state.data, ...action.data};
    }
    case SIGN_OUT: {
      return {
        data: {},
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export const authUser = (data) => ({
  type: AUTH_USER,
  data: data,
});
export const setUser = (data) => ({
  type: SET_USER,
  data: data,
});
export const signOut = (data) => ({
  type: SIGN_OUT,
  data: data,
});

export default auth_reducer;
