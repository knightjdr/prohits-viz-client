import PropTypes from 'prop-types';
import React from 'react';

import ConditionCondition from './tool/condition-condition/condition-condition';
import Correlation from './tool/correlation/correlation';
import Divider from '../../components/divider/divider';
import Dotplot from './tool/dotplot/dotplot';
import Specificity from './tool/specificity/specificity';

import './advanced.css';

const loadToolOptions = (tool, errors) => {
  if (tool === 'condition-condition') {
    return <ConditionCondition errors={errors} />;
  } if (tool === 'correlation') {
    return <Correlation errors={errors} />;
  } if (tool === 'dotplot') {
    return <Dotplot errors={errors} />;
  } if (tool === 'specificity') {
    return <Specificity errors={errors} />;
  }
  return null;
};

const Advanced = ({
  errors,
  tool,
  visible,
}) => (
  <div
    className="analysis__advanced"
    style={{
      display: visible ? 'block' : 'none',
    }}
  >
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
  visible: PropTypes.bool.isRequired,
};

export default Advanced;
