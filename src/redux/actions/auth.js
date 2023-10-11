import * as api from '../../api';
import {authUser} from '../reducers/user';

export const auth = (username, password) => async (dispatch) => {
  try {
    const res = await api.auth(username, password);
    console.log(res.data);
    dispatch(authUser(res.data.user));
    return res.data.token;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const checkUser = () => async (dispatch) => {
  try {
    const res = await api.checkAuth();
    dispatch(authUser(res.data.user));
  } catch (error) {
    console.log(error.response.data.message);
  }
};