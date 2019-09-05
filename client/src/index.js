import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Register from './Register';
import './index.css';

const Routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/register' component={Register} />
    </Switch>
  </Router>
)

ReactDOM.render(
  Routing,
  document.getElementById( 'root' )
);
