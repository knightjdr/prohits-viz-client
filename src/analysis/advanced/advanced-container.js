import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Advanced from './advanced';

import { selectStateProperty } from '../../state/selector/general';

const AdvancedContainer = ({
  errors,
  visible,
}) => {
  const tool = useSelector((state) => selectStateProperty(state, 'form', 'tool'));

  return (
    <Advanced
      errors={errors}
      tool={tool}
      visible={visible}
    />
  );
};

AdvancedContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  visible: PropTypes.bool.isRequired,
};

const ShowWrapper = ({
  show,
  ...props
}) => (
  show && <AdvancedContainer {...props} />
);

ShowWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowWrapper;
