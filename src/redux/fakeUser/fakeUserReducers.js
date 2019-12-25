import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCES,
  FETCH_USERS_FAILURE,
} from './fakeUserTypes';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

export default (state = initialState, { type, users, error }) => {
  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCES:
      return {
        loading: false,
        users,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return { loading: false, users, error };

    default:
      return state;
  }
};
