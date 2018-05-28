import React, { Component } from 'react';
import axios from 'axios';
import './Support.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Support extends Component {
    constructor() {
        super();

        this.state = {
            support: '',
        }
    }

    handleChangeSupport = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    handleSupportSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
    }
  render() {
    return (
      <div className="Support">
           <form onSubmit={this.handleSupportSubmit}>
                    <input onChange={this.handleChangeSupport} value={this.state.support} placeholder="Support"/>
                    <input type="submit" className="submit-button" value="NEXT" />
<Link to="/4">Next</Link>
</form>
      </div>
    );
  }
}

export default connect()(Support);