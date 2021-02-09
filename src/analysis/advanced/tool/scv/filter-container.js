import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filtering from './filter';

import { selectState } from '../../../../state/selector/general';
import { setFormField, setFormFields } from '../../../../state/analysis/form-actions';

const FilteringContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const handleChangeAbundanceCap = (value) => {
    if (value >= form.minAbundance) {
      dispatch(setFormField('abundanceCap', value));
    } else {
      const newSettings = {
        abundanceCap: value,
        minAbundance: value - 0.01,
      };
      dispatch(setFormFields(newSettings));
    }
  };

  const handleChangeMinAbundance = (value) => {
    if (value <= form.abundanceCap) {
      dispatch(setFormField('minAbundance', value));
    } else {
      const newSettings = {
        abundanceCap: value + 0.01,
        minAbundance: value,
      };
      dispatch(setFormFields(newSettings));
    }
  };

  const handleChange = (e, id, value) => {
    if (id === 'abundanceCap') {
      handleChangeAbundanceCap(value);
    } else if (id === 'minAbundance') {
      handleChangeMinAbundance(value);
    } else {
      dispatch(setFormField(id, value));
    }
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
