import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tool from './tool';
import { selectStateProperty } from '../../state/selector/general';
import { setFormField } from '../../state/analysis/form-actions';

const ToolContainer = () => {
  const dispatch = useDispatch();

  const selectedtool = useSelector(state => selectStateProperty(state, 'form', 'tool'));

  const setTool = (e, id, value) => {
    dispatch(setFormField('tool', value));
  };

  return (
    <Tool
      selectedtool={selectedtool}
      setTool={setTool}
    />
  );
};

export default ToolContainer;
