import { combineReducers, createStore } from 'redux';
import countReducer from './actions-creators & reducers/count';
import favoriteThingsReducer from './actions-creators & reducers/favoriteThings';
import instagramReducer from './actions-creators & reducers/instagram';

const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  instagram: instagramReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => store.getState());
export default store;
