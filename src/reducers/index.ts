import { from } from 'core-js/fn/array';
import { combineReducers } from 'redux';
import count from './count';

export default combineReducers({ count });
// export default combineReducers({ foo, bar, baz });
