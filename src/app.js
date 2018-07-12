import React, { PureComponent } from 'react';
import { roll } from './store';
import { connect } from 'react-redux';
import Dice from './Dice';
import NumberOfDiceForm from './NumberOfDiceForm';

import PropTypes from 'prop-types';

class App extends PureComponent {
    render () {
        const { dispatch, number } = this.props;
        return (
            <div>
                <NumberOfDiceForm />

                <button onClick={() => {
                    dispatch({ type: 'ROLL', payload: roll(number) });
                }}>
                    Roll again {number} dices
                </button>
                <Dice />
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    dice: state.dice,
    number: state.roller.number
});
App.propTypes = {
    dice: PropTypes.array,
    dispatch: PropTypes.func,
    number: PropTypes.number

};
export default connect(mapStateToProps)(App);
