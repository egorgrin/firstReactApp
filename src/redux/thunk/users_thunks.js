import {usersAPI} from '../../api/api';
import {setUser} from '../reducers/auth_reducer';
import {setUsers} from '../reducers/users_reducer'

export const getUsers = () => async (dispatch) => {
  try {
    const {data} = await usersAPI.getUsers();
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const {data} = await usersAPI.getUser();
    dispatch(setUser(data));
  } catch (error) {
    console.log(error.message);
  }
};


export const getFriends = () => async (dispatch) => {
  try {
    const {data} = await usersAPI.getFriends();
    dispatch(setUsers(data));
  } catch (error) {
    console.log(error.message);
  }
};
