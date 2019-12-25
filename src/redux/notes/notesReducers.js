/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
import { ADD_NOTE, REMOVE_NOTE } from './notesTypes';

const initialState = [{ task: 'call kids', id: 0 }];
export default (state = initialState, { type, task, id }) => {
  switch (type) {
    case ADD_NOTE:
      return [
        {
          id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
          task,
        },
        ...state,
      ];

    case REMOVE_NOTE:
      return state.filter(note => note.id !== id);

    default:
      return state;
  }
};
