import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Cars from './components/cars';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

export default (
  <Route path='/' component={Cars}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(
            null,
            require('./components/cars_list_page').default
          );
        });
      }}
    />
  </Route>
);
