import React, { Component } from 'react';
import './Content.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Content extends Component {
    constructor() {
        super();

        this.state = {
            feedback: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            feedback: this.props.reduxState.feedbackForm.content,
        })
    }
    //assign input value to state property
    handleChangeContent = (event) => {
        console.log('input was changed');
        console.log(event.target.value);
        this.setState({
            feedback: event.target.value
        })
    }
    // Send state to store and move to next page
    handleContentSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_FEEDBACK', property: 'content', payload: this.state.feedback });
        this.props.history.push('/3');
    }

    render() {
        return (
            <div className="Content">
                <h2>2 of 4 pages</h2>
                <h3>How well are you understanding the content?</h3>
                <form onSubmit={this.handleContentSubmit}>
                    <input onChange={this.handleChangeContent} placeholder="Content" type="number" min="1" max="5" required />
                    <input type="submit" className="submit-button" value="NEXT" />
                    {/* <Link to="/3">Next</Link> */}
                </form>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(Content);