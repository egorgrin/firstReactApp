import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import friends from './reducers/friends';
import users from './reducers/users';
import user from './reducers/user';
import input from './reducers/input';

let reducers = combineReducers(
    {
      friends,
      input,
      users,
      user,
    });

let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;