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

const BreadForm = ({ handleAddBread }) => {
  const [numb, setNumber] = useState(1);
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    handleAddBread(numb);
    setNumber('');
  };
  const handleChange = e => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        value={numb}
        onChange={handleChange}
        type="number"
        id="addBread"
        label="Increase of Decrease"
        variant="outlined"
      />
      <Button size="large" type="submit" color="primary">
        ADD BREAD
      </Button>
      <Button size="large" type="submit" color="secondary">
        REMOVE BREAD
      </Button>
    </form>
  );
};

export default BreadForm;
