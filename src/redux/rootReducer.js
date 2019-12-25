import { combineReducers } from 'redux';
import notes from './notes/notesReducers';
import breads from './bread/breadReducers';
import fakeUsers from './fakeUser/fakeUserReducers';

const rootReducer = combineReducers({
  notes,
  breads,
  fakeUsers,
});

export default rootReducer;
