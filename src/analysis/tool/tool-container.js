import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tool from './tool';

import defaultFormValues from './default-form-values';
import { selectState } from '../../state/selector/general';
import { setFormFields } from '../../state/analysis/form-actions';

const ToolContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const setTool = (e, id, value) => {
    dispatch(
      setFormFields({
        ...defaultFormValues[value],
        ...form,
        tool: value,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      setFormFields({
        ...defaultFormValues[selectedtool],
      }),
    );
  }, [dispatch, selectedtool]);

  return (
    <Tool
      errors={errors}
      selectedtool={form.tool}
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
