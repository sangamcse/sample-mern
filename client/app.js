import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// // Base stylesheet
// require('./main.css');

export default function App() {
  return (
    <Provider>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>
  );
}
