import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
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

  const abundanceColumnOptions = Array.isArray(form.abundance) ? form.abundance : [form.abundance];

  useEffect(() => {
    if (!form.abundanceFilterColumn) {
      dispatch(setFormField('abundanceFilterColumn', abundanceColumnOptions[0]));
    }
  }, [abundanceColumnOptions, dispatch, form.abundanceFilterColumn]);

  return (
    <Filtering
      abundanceColumnOptions={abundanceColumnOptions}
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
