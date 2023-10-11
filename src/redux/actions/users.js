import * as api from '../../api';
import {setUser} from '../reducers/user';
import {setUsers} from '../reducers/users';

export const getUsers = () => async (dispatch) => {
  try {
    const {data} = await api.fetchUsers();
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const {data} = await api.fetchUser();
    dispatch(setUser(data));
  } catch (error) {
    console.log(error.message);
  }
};


export const getFriends = () => async (dispatch) => {
  try {
    const {data} = await api.fetchFriends();
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error.message);
  }
};
