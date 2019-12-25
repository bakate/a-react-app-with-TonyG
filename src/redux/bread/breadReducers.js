import { INCREASE_BREAD, DECREASE_BREAD } from './breadTypes';

const initialState = {
  numOfBread: 20,
};

export default (state = initialState, { type, number }) => {
  switch (type) {
    case INCREASE_BREAD:
      return { ...state, numOfBread: state.numOfBread + number };
    case DECREASE_BREAD:
      return { ...state, numOfBread: state.numOfBread - number };

    default:
      return state;
  }
};
