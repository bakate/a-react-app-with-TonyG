/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { increaseBread, decreaseBread } from '../redux';
import BreadForm from './BreadForm';

function BreadContainer({ remainingBreads, increaseBread, decreaseBread }) {
  const addBread = val => increaseBread(val);
  const removeBread = val => decreaseBread(val);

  return (
    <>
      <h2>Right now, there are {remainingBreads} breads in the Bakery</h2>
      <BreadForm
        handleAddBread={addBread}
        handleRemoveBread={{ ...remainingBreads, removeBread }}
      />
    </>
  );
}
const mapState = state => ({
  remainingBreads: state.breads.numOfBread,
});

export default connect(mapState, { increaseBread, decreaseBread })(
  BreadContainer
);
