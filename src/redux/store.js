import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import friends from './reducers/friends_reducer';
import users from './reducers/users_reducer';
import auth from './reducers/auth_reducer';
import input from './reducers/input_reducer';

let reducers = combineReducers(
    {
      friends,
      input,
      users,
      auth,
    });

let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;