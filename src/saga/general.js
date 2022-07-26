import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects';
import {GET_DATA_REQUEST} from '../actions/ActionsTypes';
import {getDataSuccess} from '../actions/GeneralActions';

import {fetchData} from '../services/api';

function* getApiData(action) {
  const {payload, responseCallback} = action;
  try {
    const data = yield call(() => fetchData(payload));
    if (responseCallback) responseCallback(true, null);

    // call success action
    yield put(getDataSuccess(data));
  } catch (e) {
    if (responseCallback) responseCallback(null, true);
  }
}

// watcher

export default function* mySaga() {
  yield takeLatest(GET_DATA_REQUEST, getApiData);
}
