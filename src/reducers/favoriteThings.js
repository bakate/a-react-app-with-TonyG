export default function favoriteThingsReducer(favoriteThings = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE_THING':
      return [...favoriteThings, { id: action.id, text: action.text }];
    case 'REMOVE_FAVORITE_THING': {
      const updatedArr = [
        ...favoriteThings.slice(0, action.id),
        ...favoriteThings.slice(action.action.id + 1),
      ];

      return updatedArr;
    }
    default:
      return favoriteThings;
  }
}
