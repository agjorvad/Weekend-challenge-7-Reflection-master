import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';


//reducer for form components

const feedbackForm = (state = {}, action) => {
    // Action for first 3 pages
    if (action.type === "ADD_FEEDBACK") {
        state = {
            ...state,
            [action.property]: action.payload,
        }
    // Action for submit page
    } else if (action.type === "SUBMIT_FEEDBACK") {
        postFeedback(state);
    }
    return state;
}
// Post feedback to database
const postFeedback = (feedback) => {
    axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log('success', feedback);
        })
        .catch((error) => {
            alert('There was a problem');
        })
}

// Create store
const storeInstance = createStore(
    combineReducers({
        feedbackForm
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
