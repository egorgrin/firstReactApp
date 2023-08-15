import {combineReducers, legacy_createStore as createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';


let reducers = combineReducers({
  user: dialogsReducer,
});

let store = createStore(reducers);

export default store;