export default function countReducer(count = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    case 'DOUBLE':
      return count * 2;
    case 'HALVE':
      return Math.round(count / 2);
    default:
      return count;
  }
}
