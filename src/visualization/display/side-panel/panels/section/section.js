import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import './section.css';

const Info = ({
  border,
  children,
  title,
}) => (
  <Fragment>
    { border && <div className="panel__section-border" /> }
    {
      title
      && <h1 className="panel__section-title">{title}</h1>
    }
    {children}
  </Fragment>
);

Info.defaultProps = {
  border: true,
  title: null,
};

Info.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Info;
