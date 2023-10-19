// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';


// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
);

// Measure performance in the app and report the results
reportWebVitals();
