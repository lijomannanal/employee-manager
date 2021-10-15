import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import rootSaga from './index';
import { fetchEmployees } from '../actions'


  
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

// store.dispatch(fetchEmployees()); 

export default store;