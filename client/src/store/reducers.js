import { combineReducers } from 'redux';
import ModalsReducer from './modals/reducer';

const getReducers = extraReducers => {
  return combineReducers({
    modals: ModalsReducer,
    ...extraReducers,
  });
};

export default getReducers;
