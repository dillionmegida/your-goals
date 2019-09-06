import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Register from './views/Register';
import Login from './views/Login';
import User from './views/User.js';
import './styles/index.css';

const Routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/user' component={User} />
    </Switch>
  </Router>
)

ReactDOM.render(
  Routing,
  document.getElementById( 'root' )
);
