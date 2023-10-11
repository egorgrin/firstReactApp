const AUTH_USER = 'AUTH_USER';
const SET_USER = 'SET_USER';

const initialStale = {
  user: {},
  isAuth: false
}

const user = (state = initialStale, action) => {
  switch (action.type) {
    case AUTH_USER: {
      let newState = {
        user:{...state.user, ...action.user},
        isAuth: true
      };
      // console.log(newState);
      return newState;
    }
    case SET_USER: {
      return {...state.user, ...action.user};
    }
    default:
      return state;
  }
};

export const authUser = (user) => ({
  type: AUTH_USER,
  user: user,
})
export const setUser = (user) => ({
  type: SET_USER,
  user: user,
});

export default user;
