import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Register from './Register';
import './index.css';

const Routing = (
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/register' component={Register} />
		</div>
	</Router>
)

ReactDOM.render(
  Routing,
  document.getElementById('root')
);
