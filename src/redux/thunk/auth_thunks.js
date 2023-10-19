import {authAPI} from '../../api/api';
import {authUser} from '../reducers/auth_reducer';

export const auth = (username, password) => async (dispatch) => {
  try {
    const res = await authAPI.auth(username, password);
    // console.log(res.data);
    dispatch(authUser(res.data.user));
    return res.data.token;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const res = await authAPI.checkAuth();
    dispatch(authUser(res.data.user));
  } catch (error) {
    console.log(error.response.data.message);
  }
};