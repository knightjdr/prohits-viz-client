import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../../components/divider/divider';

import './advanced.css';

const Advanced = ({
  errors,
}) => (
  <div>
    <Divider>Advanced options</Divider>
  </div>
);

Advanced.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

export default Advanced;
