import React from 'react';

import Link from '../components/link/text/link';

import './not-found.css';

const NotFoundPage = () => (
  <div className="not-found">
    <h1>404: page not found</h1>
    <p>
      The page you were looking for was moved, removed, renamed or never existed.
      You can e-mail us at
      {' '}
      <Link
        to="mailto:contact@prohits-viz.org"
        outline={false}
        visited={false}
      >
        contact@prohits-viz.org
      </Link>
      {' '}
      if you think there is a problem.
    </p>
    <div className="not-found__links">
      <Link
        to="/"
        outline={false}
        visited={false}
      >
        Home
      </Link>
      <Link
        to="/help"
        outline={false}
        visited={false}
      >
        Help
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
