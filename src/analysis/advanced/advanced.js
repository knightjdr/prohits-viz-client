import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../../components/divider/divider';
import Dotplot from './tool/dotplot/dotplot-container';

import './advanced.css';

const loadToolOptions = (tool, errors) => {
  switch (tool) {
    case 'dotplot':
      return <Dotplot errors={errors} />;
    default:
      return null;
  }
};

const Advanced = ({
  errors,
  tool,
}) => (
  <div className="analysis__advanced">
    <Divider>Advanced options</Divider>
    {loadToolOptions(tool, errors)}
  </div>
);

Advanced.defaultProps = {
  tool: '',
};

Advanced.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  tool: PropTypes.string,
};

export default Advanced;
