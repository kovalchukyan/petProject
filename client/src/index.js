import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import './index.css';
import App from './containers/App';
import configStore from './store/store';

let store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'));
