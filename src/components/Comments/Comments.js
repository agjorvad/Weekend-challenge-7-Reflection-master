import React, { Component } from 'react';
import './Comments.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            feedback: this.props.reduxState.feedbackForm.comments,
        })
    }
    //assign input value to state property
    handleChangeComments = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            feedback: event.target.value
        })
    }
    // Send state to store
    handleCommentsSubmit = (event) => {
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_FEEDBACK', property: 'comments', payload: this.state.feedback });
    }
    // Run post request in store
    submitFeedback = () => {
        this.props.dispatch({ type: 'SUBMIT_FEEDBACK' });
    }
    // Send page state to store and run post request, then move to next page
    submitAllToStore = (event) => {
        event.preventDefault();
        this.handleCommentsSubmit();
        this.submitFeedback();
        this.props.history.push('/5');
    }

    render() {
        return (
            <div className="Comments">
                <h2>4 of 4 pages</h2>
                <h3>Any comments you want to leave?</h3>
                <form onSubmit={this.submitAllToStore}>
                    <Input onChange={this.handleChangeComments} placeholder="Comments" type="text" required />
                    <Button onClick={this.submitAllToStore} variant="raised" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Comments);