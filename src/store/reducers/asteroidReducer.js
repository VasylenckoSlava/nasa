import {
  GET_ASTEROID_BY_ID,
  GET_ASTEROID_RANDOMLY,
} from '../actions/asteroidAction';

const initialState = {
  asteroid: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ASTEROID_RANDOMLY: {
      return {
        ...state,
        asteroid: action.payload,
      };
    }
    case GET_ASTEROID_BY_ID: {
      return {
        ...state,
        asteroid: action.payload,
      };
    }
    default:
      return state;
  }
}
