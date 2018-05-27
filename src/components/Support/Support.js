import React, { Component } from 'react';
import axios from 'axios';
import './Support.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Support extends Component {
  render() {
    return (
      <div className="Support">
<Link to="/4">Next</Link>
      </div>
    );
  }
}

export default connect()(Support);