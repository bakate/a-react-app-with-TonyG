/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Form from './NotesListForm';
import { addNote, removeNote } from '../redux';

const NotesList = ({ allNotes, addNote, removeNote }) => {
  const addNewNote = val =>
    val ? addNote(val) : alert('You have to type something, first');
  const tasks = allNotes.map((val, index) => (
    <Note key={index} task={val.task} removeNote={() => removeNote(val.id)} />
  ));
  const notesList = allNotes.length;
  return (
    <>
      <h3>
        Rigth now, there are {notesList} Note{notesList > 1 ? 's' : ''} in your
        list
      </h3>
      <Form handleNewNote={addNewNote} />
      <div>
        <ul>{tasks.reverse()}</ul>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  allNotes: state.notes,
});

export default connect(mapStateToProps, { addNote, removeNote })(NotesList);
