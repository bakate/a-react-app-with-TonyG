/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ButtonStyles from '../styles/Button';
import { increment, decrement, double, halve } from '../actions';

const Counting = ({ count, increment, decrement, double, halve }) => (
  <div>
    <h1>Count goes here papi {count}</h1>
    <ButtonStyles>
      <button onClick={increment} type="button">
        Plus
      </button>
      <button onClick={decrement} type="button">
        Minus
      </button>
      <button onClick={double} type="button">
        Multiply by 2
      </button>
      <button onClick={halve} type="button">
        Halve
      </button>
    </ButtonStyles>
  </div>
);

// const mapStateToProps /* or whatever we want */ = rootReducer => ({
//   count: rootReducer.count,
// });
// const mapDispatchToProps = {
//   increment,
//   decrement,
//   double,
//   halve
// }

export default connect(
  rootreducer => ({ count: rootreducer.count }),
  {
    increment,
    decrement,
    double,
    halve,
  }
)(Counting);
