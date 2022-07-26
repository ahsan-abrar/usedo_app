import {GET_DATA_SUCCESS} from '../actions/ActionsTypes';

const initialState = {
  list: [],
};
const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        list: [...state.list, ...action.data],
      };
    default:
      return state;
  }
};
export default generalReducer;
