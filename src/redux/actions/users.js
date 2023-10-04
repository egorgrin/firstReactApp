import * as api from '../../api';

export const getUsers = () => async (dispatch) => {
  try {
    const {data} = await api.fetchUsers();
    dispatch({type: 'FETCH_USERS', payload: data});

  } catch (error) {
    console.log(error.message);
  }
};

/*
export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user);
    dispatch({type: 'CREATE_USER', payload: data});
  } catch (error) {
    console.log(error.message);
  }
};*/

export const getFriends = () => async (dispatch) => {
  try {
    const {data} = await api.fetchFriends();
    dispatch({type: 'FETCH_USERS', payload: data});

  } catch (error) {
    console.log(error.message);
  }
};
