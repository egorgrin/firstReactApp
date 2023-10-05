import * as api from '../../api';

export const auth = ( username, password ) => async (dispatch) => {
  try {
    const {data} = await api.auth( username, password );
    dispatch({type: 'AUTH_ADMIN', payload: data.admin});

  } catch (error) {
    console.log(error.response.data.message);
  }
};
