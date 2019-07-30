import { combineReducers } from 'redux';

// reducers
import home from './home/home-reducer';

const reducers = combineReducers({
  home,
});

export default reducers;
