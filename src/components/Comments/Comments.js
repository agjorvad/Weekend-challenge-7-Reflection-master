import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: '',
        }
    }

    handleChangeComments = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            comments: event.target.value
        })
    }

    handleCommentsSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
    }

    // formatCheckoutObject = () => {
    //     const redux = this.props.reduxState;
    //     this.setState({
    //         feedback:
    //         {
    //             feeling: redux.feeling
    //         }
    //     })
    // }

    postFeedback = () => {
        axios.post('/api/feedback', this.props.reduxState)
            .then((response) => {
                console.log('success', this.props.reduxState);
            })
            .catch((error) => {
                alert('There was a problem');
            })
    }

  render() {
    return (
      <div className="Comments">
<form onSubmit={this.handleCommentsSubmit}>
                    <input onChange={this.handleChangeComments} value={this.state.comments} placeholder="Comments"/>
                    <input type="submit" className="submit-button" value="NEXT" />
<Link to="/5">Submit</Link>
</form>
<button onClick={this.postFeedback}>Send</button>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);