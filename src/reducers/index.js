import { combineReducers, createStore } from 'redux';
import countReducer from './count';
import favoriteThingsReducer from './favoriteThings';

const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => store.getState());
export default store;
