import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Comments extends Component {
  render() {
    return (
      <div className="Comments">

<Link to="/5">Submit</Link>
      </div>
    );
  }
}

export default connect()(Comments);