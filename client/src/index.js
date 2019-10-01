import React from 'react';
import { render } from 'react-dom';
import Persistor from './config/apollo.config'
import './styles/index.css';

// import components from route
import AppRoute from "./AppRoutes";
const Root = document.getElementById('root')

const AppService = () => (
  <Persistor>
    <AppRoute />
  </Persistor>
)

render(<AppService />, Root);