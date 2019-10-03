import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/privateRoute'
import App from './App';
import Register from './views/Register';
import Login from './views/Login';
import User from './views/User.js';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/user' component={User} />
    </Switch>
  </Router>
)

export default Routing
