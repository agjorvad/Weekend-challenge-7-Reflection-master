import React, { Component } from 'react';
import axios from 'axios';
import './Feeling.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Feeling extends Component {
  render() {
    return (
      <div className="Feeling">
<Link to="/2">Next</Link>
      </div>
    );
  }
}

export default connect()(Feeling);