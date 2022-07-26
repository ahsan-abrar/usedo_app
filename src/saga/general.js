import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects';
import {getDataSuccess, loadMoreSuccess} from '../actions/GeneralActions';
import {fetchData} from '../services/api';
import {
  GET_DATA_REQUEST,
  LOAD_MORE_LIST_REQUEST,
} from '../actions/ActionsTypes';

function* getApiData(action) {
  const {payload, responseCallback} = action;

  try {
    const data = yield call(() => fetchData(payload));
    // call success action
    yield put(getDataSuccess(data?.data));
    if (responseCallback) responseCallback(data, null);
  } catch (e) {
    console.log(e);
    if (responseCallback) responseCallback(null, true);
  }
}

function* loadMoreList(action) {
  const {payload, responseCallback} = action;

  try {
    const data = yield call(() => fetchData(payload));
    // call success action
    yield put(loadMoreSuccess(data?.data));
    if (responseCallback) responseCallback(data, null);
  } catch (e) {
    console.log(e);
    if (responseCallback) responseCallback(null, true);
  }
}

// watcher

export default function* mySaga() {
  yield takeLatest(GET_DATA_REQUEST, getApiData);
  yield takeLatest(LOAD_MORE_LIST_REQUEST, loadMoreList);
}
