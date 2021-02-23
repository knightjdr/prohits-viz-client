import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Mapping from './mapping';

import { selectState } from '../../../../../state/selector/general';
import { setFormField } from '../../../../../state/analysis/form-actions';

const MappingContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  const selectFile = (e, id, selectedFiles) => {
    dispatch(setFormField(id, selectedFiles));
  };

  return (
    <Mapping
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
      selectFile={selectFile}
    />
  );
};

MappingContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default MappingContainer;
