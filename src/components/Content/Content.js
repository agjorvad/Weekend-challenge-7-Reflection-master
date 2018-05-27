import React, { Component } from 'react';
import axios from 'axios';
import './Content.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Content extends Component {
  render() {
    return (
      <div className="Content">
<Link to="/3">Next</Link>
      </div>
    );
  }
}

export default connect()(Content);