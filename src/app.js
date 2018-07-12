import React, { PureComponent } from 'react';
import { roll } from './store';
import { connect } from 'react-redux';
import Dice from './Dice';

class App extends PureComponent {
    render () {
        const { dispatch } = this.props;
        return (
            <div>
                <button onClick={() => {
                    dispatch({ type: 'ROLL', payload: roll() });
                }}>
                    Roll'em
                </button>

                <Dice />
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    dices: state.dices,
    dice: state.dice
});
export default connect(mapStateToProps)(App);
