export function increment() {
  return {
    type: 'INCREMENT',
  };
}
export function decrement() {
  return {
    type: 'DECREMENT',
  };
}
export function double() {
  return {
    type: 'DOUBLE',
  };
}
export function halve() {
  return {
    type: 'HALVE',
  };
}

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
