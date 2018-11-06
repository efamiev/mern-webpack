import React from 'react';
//  libs
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { object } from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

PrivateRoute.propTypes = {
  auth: object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
