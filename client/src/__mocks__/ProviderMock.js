import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export { ProviderMock };
