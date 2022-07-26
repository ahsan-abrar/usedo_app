import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  LOAD_MORE_LIST_REQUEST,
  LOAD_MORE_LIST_SUCCESS,
} from './ActionsTypes';

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

export function loadMoreRequest(payload, responseCallback) {
  return {
    payload,
    responseCallback,
    type: LOAD_MORE_LIST_REQUEST,
  };
}

export function loadMoreSuccess(data) {
  return {
    data,
    type: LOAD_MORE_LIST_SUCCESS,
  };
}
