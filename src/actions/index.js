export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});
export const double = () => ({
  type: 'DOUBLE',
});
export const halve = () => ({
  type: 'HALVE',
});

export const addFavoriteThing = text => ({
  type: 'ADD_FAVORITE_THING',
  id: Math.random(Date.now()),
  text,
});

export const removeFavoriteThing = id => ({
  type: 'REMOVE_FAVORITE_THING',
  id,
});
