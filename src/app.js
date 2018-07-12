import React, { PureComponent } from 'react';
import { roll } from './store';
import { connect } from 'react-redux';


class App extends PureComponent {
    render () {
        const { dispatch, dices, dice } = this.props;
        return (
            <div>
                <button onClick={() => {
                    dispatch({ type: 'ROLL', payload: roll() });
                }}>
                    Roll'em
                </button>
                <p >
                    Dice 1: {dice[dices[0]]}
                </p>
                <p>
                    Dice 2: {dice[dices[1]]}
                </p>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    dices: state.dices,
    dice: state.dice
});
export default connect(mapStateToProps)(App);
