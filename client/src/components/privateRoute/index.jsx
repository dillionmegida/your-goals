import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('goals_token');
  const isAuth = token ? token : false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};
