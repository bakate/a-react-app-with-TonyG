import { INCREASE_BREAD, DECREASE_BREAD } from './breadTypes';

export const increaseBread = (number = 1) => ({
  type: INCREASE_BREAD,
  number,
});
export const decreaseBread = number => ({
  type: DECREASE_BREAD,
  number,
});
