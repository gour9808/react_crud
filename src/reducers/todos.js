import { FETCH_USERS, DELETE_USER, USER_ERROR, FETCH_USER } from '../actions/types';

const INITIAL_STATE = { all: [], user: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, error: '', all: action.payload, user: {} };
    case FETCH_USER:
      return { ...state, error: '', user: action.payload };
    case DELETE_USER:
      return { ...state, all: state.all.filter((user) => user._id !== action.payload) };
    case USER_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}