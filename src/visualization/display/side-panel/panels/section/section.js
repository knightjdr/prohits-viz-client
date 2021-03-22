import PropTypes from 'prop-types';
import React from 'react';

import HelpLink from './help-link';

import './section.css';

const Section = ({
  border,
  children,
  helpLink,
  title,
}) => (
  <>
    { border && <div className="panel__section-border" /> }
    {
      title
      && (
        <div>
          <h2 className="panel__section-title">
            {title}
          </h2>
          { helpLink && <HelpLink route="helpLink" /> }
        </div>
      )
    }
    {children}
  </>
);

Section.defaultProps = {
  border: true,
  helpLink: '',
  title: null,
};

Section.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  helpLink: PropTypes.string,
  title: PropTypes.node,
};

export default Section;
