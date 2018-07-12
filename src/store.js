import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    dice: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
    diceResults: [],
    number: 0
};

export const roll = (y) => {
    let dices = [];
    for (var x = 0; x < y; x++) {
        dices[x] = Math.floor(Math.random() * 6);
    }
    return dices;
};
export const setNumber = 'SET_NUMBER';

const roller = (state = initialState, action) => {
    if (action.type === 'ROLL') {
        return {
            ...state,
            diceResults: action.payload
        };
    }
    if (action.type === setNumber) {
        return {
            ...state,
            number: action.payload,
            diceResults: []
        };
    }
    return state;
};
const rootReducer = combineReducers({
    roller: roller,
    form: formReducer

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
