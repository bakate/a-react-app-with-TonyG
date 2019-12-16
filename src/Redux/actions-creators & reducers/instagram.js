export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
}
export function upVoteVideo() {
  return {
    type: 'UP_VOTE_VIDEO',
  };
}
export function downVoteVideo() {
  return {
    type: 'DOWN_VOTE_VIDEO',
  };
}

const initialState = {
  title: '',
  votes: {
    up: 0,
    down: 0,
  },
};

export default function instagramReducer(
  instagramState = initialState,
  action
) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...instagramState,
        title: action.payload,
      };
    case 'UP_VOTE_VIDEO':
      return {
        ...instagramState,
        votes: {
          ...instagramState.votes,
          up: instagramReducer.votes.up + 1,
        },
      };
    case 'DOWN_VOTE_VIDEO':
      return {
        ...instagramReducer,
        votes: {
          ...instagramState.votes,
          down: instagramState.votes.down - 1,
        },
      };

    default:
      return instagramState;
  }
}
