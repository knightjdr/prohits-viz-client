import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './footer/footer';
import Menu from './menu/menu-container';
import NotFoundPage from '../routes/not-found';

import About from './about/about';
import Analysis from './analysis/analysis';
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
      <Switch>
        <Route exact path="/help" component={Main} />
        <Route path="/help/about" component={About} />
        <Route path="/help/analysis" component={Analysis} />
        <Route path="/help/citation" component={Citation} />
        <Route path="/help/privacy" component={Privacy} />
        <Route path="/help/visualization" component={Visualization} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
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
