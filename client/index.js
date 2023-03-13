import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const mountApp = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./app').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      mountApp
    );
  });
}
