import React, { Component } from 'react';
import './Support.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Support extends Component {
    constructor() {
        super();

        this.state = {
            feedback: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            feedback: this.props.reduxState.feedbackForm.support,
        })
    }
    //assign input value to state property
    handleChangeSupport = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            feedback: event.target.value
        })
    }
    // Send state to store and move to next page
    handleSupportSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_FEEDBACK', property: 'support', payload: this.state.feedback });
        this.props.history.push('/4');
    }
    render() {
        return (
            <div className="Support">
                <h2>3 of 4 pages</h2>
                <h3>How well are you being supported?</h3>
                <form onSubmit={this.handleSupportSubmit}>
                    <input onChange={this.handleChangeSupport} placeholder="Support" type="number" min="1" max="5" required />
                    <input type="submit" className="submit-button" value="NEXT" />
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Support);