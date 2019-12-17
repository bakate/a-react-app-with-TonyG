import React from 'react';
import { connect } from 'react-redux';
import ButtonStyles from '../styles/Button';
import { addFavoriteThing, removeFavoriteThing } from '../actions';

const Favoriting = ({ favorite, addFavoriteThing, removeFavoriteThing }) => {
  let input;
  const handleSubmit = e => {
    e.preventDefault();
    addFavoriteThing(input.value);
    input.value = '';
  };
  return (
    <div>
      <p>Insert your Favorite things below</p>
      <form onSubmit={handleSubmit}>
        <ButtonStyles>
          <label htmlFor="Favorite Thing">
            Favorite Thing
            <br />
            <input
              type="text"
              ref={node => (input = node)}
              placeholder="Add your favorite thing"
            />
          </label>

          <button type="submit">Add</button>
          <h3>Here are your Favorite Things</h3>
          <ul>
            {favorite.map(fav => (
              <li key={fav.id}>
                {fav.text}
                <button type="submit" onClick={removeFavoriteThing}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </ButtonStyles>
      </form>
    </div>
  );
};

export default connect(
  rootreducer => ({
    favorite: rootreducer.favoriteThings,
  }),
  { addFavoriteThing, removeFavoriteThing }
)(Favoriting);
