import { combineReducers } from 'redux';
import counterReducer from './counter';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;

// rootReducer = {
//     counter: {
//         a: '주형',
//         count: 1
//     }
// };

// state = {
//     counter: {
//         a: '주형',
//         count: 1
//     }
// };


