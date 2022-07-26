import {GET_DATA_REQUEST, GET_DATA_SUCCESS} from './ActionsTypes';

export function getDataRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: GET_DATA_REQUEST,
  };
}

export function getDataSuccess(data) {
  return {
    data,
    type: GET_DATA_SUCCESS,
  };
}
