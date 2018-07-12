import { createStore } from 'redux';

const initialState = {
    dice: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
    dices: []
};

export const roll = () => {
    let dices = [];
    dices[0] = Math.floor(Math.random() * 6);
    dices[1] = Math.floor(Math.random() * 6);
    return dices;
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ROLL') {
        return {
            ...state,
            dices: action.payload
        };
    }

    return state;
};

const store = createStore(reducer);

export default store;
