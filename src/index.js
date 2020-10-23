import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';

import App from './components/App';
import rootReducer from './reducer/index';

render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById('root'));
