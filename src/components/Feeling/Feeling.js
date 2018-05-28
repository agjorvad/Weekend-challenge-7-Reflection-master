import React, { Component } from 'react';
import axios from 'axios';
import './Feeling.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Feeling extends Component {
    constructor() {
        super();

        this.state = {
            feeling: '',
        }
    }

    handleChangeFeeling = (event) => {
        console.log('input was changed');
        console.log(event.target);
        console.log(event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }

    handleFeelingSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked!');
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
    }

    render() {
        return (
            <div className="Feeling">
                <form onSubmit={this.handleFeelingSubmit}>
                    <input onChange={this.handleChangeFeeling} value={this.state.feeling} placeholder={'feeling'}/>
                    <input type="submit" className="submit-button" value="NEXT" />
                    <Link to="/2">Next</Link>
                    </form>
      </div>
                );
              }
            }
            
            
export default connect()(Feeling);