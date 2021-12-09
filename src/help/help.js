import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './footer/footer';
import Menu from './menu/menu-container';
import NotFoundPage from '../routes/not-found';

import About from './about/about';
import Analysis from './analysis/analysis';
import API from './api/api';
import Citation from './citation/citation';
import Main from './help-main';
import Privacy from './privacy/privacy';
import Visualization from './visualization/visualization';

import './help.css';

const Help = forwardRef((
  {
    footerNavLinks,
  },
  ref,
) => (
  <div className="help">
    <Menu />
    <div
      className="help__inner"
      ref={ref}
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="analysis/*" element={<Analysis />} />
        <Route path="api" element={<API />} />
        <Route path="citation" element={<Citation />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="visualization/*" element={<Visualization />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer navLinks={footerNavLinks} />
    </div>
  </div>
));

Help.defaultProps = {
  footerNavLinks: {
    next: {},
    previous: {},
  },
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
};

export default Help;
