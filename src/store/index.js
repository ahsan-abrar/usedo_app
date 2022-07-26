import {createStore, combineReducers, applyMiddleware} from 'redux';
import generalReducer from '../reducers/general';
import createSagaMiddleware from 'redux-saga';
import generalSaga from '../saga/general';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({general: generalReducer});

const configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(generalSaga);
  return store;
};

export default configureStore;
