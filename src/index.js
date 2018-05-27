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
const storeInstance = createStore(
    // combineReducers({
    // }),
    Feeling,
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
