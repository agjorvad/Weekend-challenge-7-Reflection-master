import React, { Component } from 'react';
import './Feeling.css';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

const emptyInput = '';

class Feeling extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: emptyInput,
        }
    }

    componentDidMount = () => {
        this.setState({
            feedback: this.props.reduxState.feedbackForm.feeling,
        })
    }

    //assign input value to state property
    handleChangeFeeling = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            feedback: event.target.value
        })
    }

    // Send state to store and move to next page
    handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_FEEDBACK', property: 'feeling', payload: this.state.feedback });
        this.props.history.push('/2');
    }

    render() {
        return (
            <div className="Feeling">
                <h2>1 of 4 pages</h2>
                <h3>How are you feeling today?</h3>
                <form onSubmit={this.handleFeelingSubmit}>
                    <input onChange={this.handleChangeFeeling} type="number" min="1" max="5" required />
                    <input type="submit" className="submit-button" value="Next" />
                    {/* <Link to="/2">Next</Link> */}
                </form>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(Feeling);