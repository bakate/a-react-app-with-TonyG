/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const NotesListForm = ({ handleNewNote }) => {
  const [createdTask, setTask] = useState('');
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    handleNewNote(createdTask);
    setTask('');
  };
  const handleChange = e => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        value={createdTask}
        onChange={handleChange}
        id="addNote"
        label="Add a Note"
        variant="outlined"
      />

      <Button size="large" type="submit" color="primary">
        Add Note
      </Button>
    </form>
  );
};

export default NotesListForm;
