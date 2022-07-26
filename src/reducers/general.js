import {
  GET_DATA_SUCCESS,
  LOAD_MORE_LIST_SUCCESS,
} from '../actions/ActionsTypes';

const initialState = {
  list: [],
};
const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE_LIST_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.data],
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
export default generalReducer;
