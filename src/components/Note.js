/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const NoteStyles = styled.li`
  text-align: center;
  font-size: 1.1rem;
  color: black;
  font-weight: bold;
  text-transform: capitalize;
  background-color: lightgrey;
  padding: 3px;
  margin: 10px;
  list-style-type: none;
  border-radius: 10px;
  button {
    background-color: lightgrey;
    color: darkred;
    font-size: 0.9rem;
    margin-left: 5px;
    :hover {
      font-size: 1.4rem;
      background-color: red;
      color: white;
    }
  }
`;
const Note = ({ task, removeNote }) => (
  <NoteStyles>
    {task}
    <button type="submit" onClick={removeNote}>
      &#10008;
    </button>
  </NoteStyles>
);

export default Note;

// style={{
//   textDecoration: completed ? 'line-through' : 'none'
// }}
