import { combineReducers } from 'redux';
import countreducer from './countreducer';

export default combineReducers({
    counter: countreducer
  })