// Import necessary dependencies
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM library
import './index.css'; // Import CSS file
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals'; // Import web vitals reporting
import store from './redux/state'; // Import the Redux store

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Define a function to render the app with the current state
let renderDOM = (state) => {
  // Render the App component with the state and the addMessage function from the store
  root.render(
      <App state={state} addMessage={store.addMessage.bind(store)} />
  );
  /*root.render(
      <React.StrictMode>
        <App state={state} addMessage={addMessage} />
      </React.StrictMode>
  );*/
};

// Render the app with the initial state
renderDOM(store.state);

// Subscribe to the store changes and re-render the app whenever the state changes
store.subscribe(renderDOM);

// Measure performance in the app and report the results
reportWebVitals();
