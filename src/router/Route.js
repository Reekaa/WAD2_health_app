/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToken from '../utils/useToken';
import { useNavigate } from 'react-router-dom';

function Route({ element: Component, auth, ...rest }) {
  const { status, loading } = useToken();
  const navigate = useNavigate();
  
  if (auth) {
    return (
      // <Router
      <div>
        {/* {...rest} */}
        render={props => {
          if (loading) {
            return <p>Loading...</p>;
          }
          return status === 'logged-in' ? (
            <Component {...props} />
          ) : (
            navigate('login')
          );
        }}
      </div>
    );
  }

  return <Router {...rest} render={props => <Component {...props} />} />;
}

Route.defaultProps = {
  auth: undefined,
};

Route.propTypes = {
  element: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

export default Route;
