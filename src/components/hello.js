/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  increment,
  decrement,
  double,
  halve,
} from '../Redux/actions-creators & reducers/count';

const ButtonStyles = styled.div`
  display: grid;
  grid-auto-columns: repeat(4, 1fr);
  gap: 15px;
  button {
    font-size: 18px;
  }
`;

const Hello = ({ count, increment, decrement, double, halve }) => (
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
        Times per 2
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

export default connect(rootreducer => ({ count: rootreducer.count }), {
  increment,
  decrement,
  double,
  halve,
})(Hello);
