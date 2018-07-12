import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Dice extends PureComponent {
    render () {
        const { diceResults, dice } = this.props;
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
    diceResults: state.roller.diceResults,
    dice: state.roller.dice
});
Dice.propTypes = {
    diceResults: PropTypes.array,
    dispatch: PropTypes.func,
    dice: PropTypes.array,
    number: PropTypes.string

};
export default connect(mapStateToProps)(Dice);
