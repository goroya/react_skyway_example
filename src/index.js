import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
/*
const store = createStore(
    reducer,
    applyMiddleware(logger)
);
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
