import React from 'react';

import FundingLinks from './funding-links';
import Link from '../../components/link/text/link';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__funding">
      <p>
        Funding for this project was graciously provided by:
      </p>
      <div className="footer__funding-links">
        <FundingLinks />
      </div>
    </div>
    <small>
      &copy;
      <span className="footer__year">
        {new Date().getFullYear()}
      </span>
      <Link to="https://gingraslab.org">
        Gingras lab
      </Link>
    </small>
  </footer>
);

export default Footer;
