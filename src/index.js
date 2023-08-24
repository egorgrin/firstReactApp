// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContext from './store-context';

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Define a function to render the app with the current state
let renderDOM = (state) => {
  // Render the App component with the state and the addMessage function from the store
  root.render(
      <StoreContext.Provider value={store}>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </StoreContext.Provider>,
  );
  /*root.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} />
      </React.StrictMode>
  );*/
};

// Render the app with the initial state
renderDOM(store.getState());

// Subscribe to the store changes and re-render the app whenever the state changes
store.subscribe(() => {
  renderDOM(store.getState());
});

// Measure performance in the app and report the results
reportWebVitals();
