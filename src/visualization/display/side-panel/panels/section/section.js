import PropTypes from 'prop-types';
import React from 'react';

import './section.css';

const Section = ({
  border,
  children,
  title,
}) => (
  <>
    { border && <div className="panel__section-border" /> }
    {
      title
      && <h2 className="panel__section-title">{title}</h2>
    }
    {children}
  </>
);

Section.defaultProps = {
  border: true,
  title: null,
};

Section.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
};

export default Section;
