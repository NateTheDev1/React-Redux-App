import {
  FETCHING_URL,
  FETCH_URL_SUCCESS,
  FETCH_URL_FAILURE,
} from "../actions/actions";

const initialState = {
  fetching: false,
  url: "",
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_URL:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_URL_SUCCESS:
      return {
        ...state,
        fetching: false,
        url: action.payload,
      };
    case FETCH_URL_FAILURE:
      return {
        ...state,
        fetching: false,
        url: action.payload,
      };
    default:
      return state;
  }
};
