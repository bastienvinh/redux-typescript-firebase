import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { RootState } from '../../store';

interface Props extends RouteProps {
  component: any;
}

const PublicRoute: FC<Props> = ({ component: Component, ...rest }) => {
  const { authenticated: authentificated } = useSelector((state: RootState) => state.auth);

  return(
    <Route {...rest} render={props => !authentificated ? <Component {...props} /> : <Redirect to="/dashboard" />} />
  );
}

export default PublicRoute;