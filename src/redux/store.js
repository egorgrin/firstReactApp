import {combineReducers, legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import currentUser from './reducers/currentUser';
import friends from './reducers/friends';
import userInput from './reducers/input';
import users from './reducers/users';

let reducers = combineReducers({
  currentUser,
  friends,
  userInput,
  users,
});

let store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;