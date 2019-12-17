export default function favoriteThingsReducer(favoriteThings = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE_THING':
      return [...favoriteThings, { id: action.id, text: action.text }];
    case 'REMOVE_FAVORITE_THING': {
      const updatedArr = [...favoriteThings];
      updatedArr.filter(deletedId => deletedId.id !== action.id);
      return updatedArr;
    }
    default:
      return favoriteThings;
  }
}