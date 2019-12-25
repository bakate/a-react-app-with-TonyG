import React from 'react';
import {
  Typography,
  makeStyles,
  Paper,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import NotesList from './NotesList';
import BreadContainer from './BreadContainer';
import UsersContainer from './UsersContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography component="h3" variant="h5">
            Bakate Ba wants to Master React
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography component="h5" variant="h5">
        <Paper className={classes.root}>
          <Typography component="h5" variant="h5" gutterBottom>
            Find below your different notes
          </Typography>
          <BreadContainer />
          <NotesList />
          <UsersContainer />
        </Paper>
      </Typography>
    </>
  );
}
