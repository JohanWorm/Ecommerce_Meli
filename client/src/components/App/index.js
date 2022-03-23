import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from 'src/routes'
import { Header } from '../Header';
import './style.scss';

const App = () => {

  const history = createBrowserHistory();

  return (
    <main className='app'>
      <Router history={history}>
        <Header />
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </Router>
    </main>
  );
}

export { App };
