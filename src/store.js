import { createStore } from 'redux';

const initialState = {
    dice: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
    diceResults: []
};

export const roll = () => {
    let dices = [];
    for (var x = 0; x < 3; x++) {
        dices[x] = Math.floor(Math.random() * 6);
    }
    return dices;
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ROLL') {
        return {
            ...state,
            diceResults: action.payload
        };
    }

    return state;
};

const store = createStore(reducer);

export default store;
