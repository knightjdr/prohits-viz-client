import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filtering from './filter';

import { selectState } from '../../../../state/selector/general';
import { setFormField } from '../../../../state/analysis/form-actions';

const FilteringContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  return (
    <Filtering
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

FilteringContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default FilteringContainer;
