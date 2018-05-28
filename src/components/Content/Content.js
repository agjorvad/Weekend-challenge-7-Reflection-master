import React, { Component } from 'react';
import axios from 'axios';
import './Content.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Content extends Component {
    constructor() {
        super();

        this.state = {
            content: '',
        }
    }

    handleChangeContent = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            content: event.target.value
        })
    }

    handleContentSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_CONTENT', payload: this.state.content });
    }

  render() {
    return (
      <div className="Content">
               <form onSubmit={this.handleContentSubmit}>
                    <input onChange={this.handleChangeContent} value={this.state.content} placeholder="Content"/>
                    <input type="submit" className="submit-button" value="NEXT" />
                    <Link to="/3">Next</Link>
                    </form>
      </div>
    );
  }
}

export default connect()(Content);