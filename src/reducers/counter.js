import { INCREMENT } from '../actions/counter';

const initialState = {
    a: '주형',
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

export default counterReducer;

// const obj = {
//     a: 'a',
//     b: 'b',
//     c: 'c'
// };
//
// const obj2 = {
//     ...obj,
//     c: 'c2'
// };
//
// {
//     a: 'a',
//     b: 'b',
//     c: 'c2'
// };