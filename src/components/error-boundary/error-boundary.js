import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/text/link';
import OopsZombie from './assets/oops-zombie.svg';

import './error-boundary.css';

const ErrorBoundary = ({
  children,
  hasError,
}) => (
  hasError
    ? (
      <div className="error-boundary">
        <div className="error-boundary__inner">
          <h1>Oops, something went terribly wrong</h1>
          <img
            alt="Zombie head"
            height={129}
            src={OopsZombie}
            width={150}
          />
          <p>
            It was (probably) not your fault. The error has been logged and hopefully
            will be fixed soon. Unfortunately your session cannot be recovered. Hit refresh
            of head
            {' '}
            <Link
              to="/"
              visited={false}
            >
              home
            </Link>
            {' '}
            to start over.
          </p>
        </div>
      </div>
    )
    : children
);

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default ErrorBoundary;
