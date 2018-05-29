import React, { Component } from 'react';
import './SubmissionSuccess.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class SubmissionSuccess extends Component {
    render() {
        return (
            <div className="SubmissionSuccess">
                <h1>Thank You!</h1>
                <Link to="/">Leave New Feedback</Link>
            </div>
        );
    }
}

export default connect()(SubmissionSuccess);