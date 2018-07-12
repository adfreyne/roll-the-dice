import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { setNumber } from './store';
import PropTypes from 'prop-types';
import { roll } from './store';

class NumberOfDiceForm extends PureComponent {
    render () {
        const { handleSubmit, number } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="quantity" component="input" type="number" id="me" />
          Number of dices: {number}
                    <button type="submit">Set number and roll'em</button>
                </form>
            </div >
        );
    }
}
const onSubmit = ({ quantity }, dispatch, number) => {
    dispatch({ type: setNumber, payload: quantity });
    dispatch({ type: 'ROLL', payload: roll(quantity) });
};

const mapStateToProps = (state) => ({
    diceResults: state.roller.diceResults,
    dice: state.roller.dice,
    number: state.roller.number
});
NumberOfDiceForm.propTypes = {
    diceResults: PropTypes.array,
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    dice: PropTypes.array,
    number: PropTypes.number

};
NumberOfDiceForm = reduxForm({
    form: 'numberForm',
    onSubmit
})(NumberOfDiceForm);
export default connect(mapStateToProps)(NumberOfDiceForm);
