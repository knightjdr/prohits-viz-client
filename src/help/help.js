import PropTypes from 'prop-types';
import React from 'react';

import Footer from './footer/footer';
import Menu from './menu/menu-container';
import NotFoundPage from '../routes/not-found';

import './help.css';

const Help = ({
  footerNavLinks,
  routeContent,
}) => (
  routeContent
    ? (
      <div className="help">
        <Menu />
        <div className="help__inner">
          {routeContent}
          <Footer navLinks={footerNavLinks} />
        </div>
      </div>
    )
    : <NotFoundPage />
);

Help.defaultProps = {
  footerNavLinks: {
    next: {},
    previous: {},
  },
  routeContent: undefined,
};

Help.propTypes = {
  footerNavLinks: PropTypes.shape({
    next: PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
    previous: PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
  routeContent: PropTypes.node,
};

export default Help;
