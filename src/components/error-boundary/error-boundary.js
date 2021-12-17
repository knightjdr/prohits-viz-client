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
            will be fixed soon, but any details you can provide would be helpful. Please
            send a message to
            {' '}
            <Link to="mailto:contact@prohits-viz.org?Subject=ProHits-viz%20help">
              contact@prohits-viz.org
            </Link>
            .
          </p>
          <p>
            Unfortunately your session cannot be recovered. Hit refresh
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
