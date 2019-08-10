import { createStore, compose } from 'redux';
import getReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  return createStore(getReducers(), initialState, composeEnhancers());
}
