import {combineReducers, legacy_createStore as createStore} from 'redux';
import userReducer from './user-reducer';
import friendsReducer from './friends-reducer';
import inputReducer from './input-reducer';


let reducers = combineReducers({
  user: userReducer,
  friends: friendsReducer,
  inputPrompt: inputReducer,
});

let store = createStore(reducers);

export default store;