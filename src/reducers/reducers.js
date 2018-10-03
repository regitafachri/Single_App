import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { HANDLE_SUBMIT_DATA, GET_DATA } from "../actions/action";

const dataNotes = (
  state = {
    isFetching: false,
    items: {},
    message: ""
  },
  action
) => {
  switch (action.type) {
    case `${HANDLE_SUBMIT_DATA}_PENDING`:
      return {
        ...state,
        isFetching: true,
        message: "processing"
      };

    case `${HANDLE_SUBMIT_DATA}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
        message: "success"
      };

    case `${HANDLE_SUBMIT_DATA}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        message: "failed"
      };

    default:
      return state;
  }
};

export const getData = (
  state = {
    isFetching: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case `${GET_DATA}_PENDING`:
      return {
        ...state,
        isFetching: true
      };
      case `${GET_DATA}_FULFILLED`:
      return{
          ...state,
          isFetching: false,
          data: action.payload
      }
      case `${GET_DATA}_REJECTED`:
      return{
          isFetching: false
      }
    default:
      return state;
  }
};

const globalReducers = combineReducers({
  dataNotes,
  getData
});

export default globalReducers;
