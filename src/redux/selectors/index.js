import { createSelector } from 'reselect';

const deletedNotes = state => state.notes;

const getDeletedNotes = createSelector([deletedNotes], (notes, ids) =>
  notes.filter(note => note.id !== ids)
);

export default getDeletedNotes;
