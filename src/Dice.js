import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Dice extends PureComponent {
    render () {
        const { dispatch, diceResults, dice } = this.props;
        let x = diceResults.map((d, idx) => {
            return (
                <p key={idx}>
          Dice {idx + 1}: {dice[d]}
                </p>
            );
        });
        return x;
    }
}
const mapStateToProps = (state) => ({
    diceResults: state.diceResults,
    dice: state.dice
});
export default connect(mapStateToProps)(Dice);
