import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducer for Feeling component

const Feeling = (state = {}, action) => {
    if(action.type === 'ADD_FEELING') {
        console.log('Feeling', action);
        return action.payload;
    }
return state;
}

const Content = (state = {}, action) => {
    if(action.type === 'ADD_CONTENT') {
        console.log('Content', action);
        return action.payload;
    }
return state;
}

const Support = (state = {}, action) => {
    if(action.type === 'ADD_SUPPORT') {
        console.log('Support', action);
        return action.payload;
    }
return state;
}

const Comments = (state = {}, action) => {
    if(action.type === 'ADD_COMMENTS') {
        console.log('Comments', action);
        return action.payload;
    }
return state;
}

const storeInstance = createStore(
    combineReducers({

    Feeling,
    Content,
    Support,
    Comments,
}),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
