import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css'; // For global styles
import './App.css'; // For app-specific styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);