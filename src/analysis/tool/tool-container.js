import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tool from './tool';

import defaultFormValues from './default-form-values';
import { selectStateProperty } from '../../state/selector/general';
import { setFormFields } from '../../state/analysis/form-actions';

const ToolContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();

  const selectedtool = useSelector(state => selectStateProperty(state, 'form', 'tool'));

  const setTool = (e, id, value) => {
    dispatch(
      setFormFields({
        tool: value,
        ...defaultFormValues[value],
      }),
    );
  };

  return (
    <Tool
      errors={errors}
      selectedtool={selectedtool}
      setTool={setTool}
    />
  );
};

ToolContainer.propTypes = {
  errors: PropTypes.shape({
    tool: PropTypes.string,
  }).isRequired,
};

const ShowWrapper = ({
  show,
  ...props
}) => (
  show && <ToolContainer {...props} />
);

ShowWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowWrapper;
