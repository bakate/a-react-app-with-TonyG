import { ADD_NOTE, REMOVE_NOTE } from './notesTypes';

export const addNote = task => ({
  type: ADD_NOTE,
  task,
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id,
});
