import PropTypes from 'prop-types';
import React from 'react';

import FooterLink from './footer-link';

import './footer.css';

const Footer = ({
  navLinks,
}) => (
  <footer className="help__footer">
    <FooterLink
      isPrevious
      text={navLinks.previous.text}
      route={navLinks.previous.route}
    />
    <FooterLink
      text={navLinks.next.text}
      route={navLinks.next.route}
    />
  </footer>
);

Footer.defaultProps = {
  navLinks: {
    next: {},
    previous: {},
  },
};

Footer.propTypes = {
  navLinks: PropTypes.shape({
    next: PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
    previous: PropTypes.shape({
      route: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

export default Footer;
