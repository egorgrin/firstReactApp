import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import currentUser from './reducers/currentUser';
import friends from './reducers/friends';
import users from './reducers/users';
import auth from './reducers/auth';
import input from './reducers/input';

let reducers = combineReducers(
    {
      currentUser,
      friends,
      input,
      users,
      auth,
    });

let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;