import PropTypes from 'prop-types';
import React from 'react';
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

  const handleChangePrimaryFilter = (value) => {
    if (
      (form.scoreType === 'lte' && value <= form.secondaryFilter)
      || (form.scoreType === 'gte' && value >= form.secondaryFilter)
    ) {
      dispatch(setFormField('primaryFilter', value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(setFormFields(newSettings));
    }
  };

  const handleScoreType = (value) => {
    if (value !== form.scoreType) {
      const newSettings = {
        primaryFilter: form.secondaryFilter,
        scoreType: value,
        secondaryFilter: form.primaryFilter,
      };
      dispatch(setFormFields(newSettings));
    }
  };

  const handleChangeSecondaryFilter = (value) => {
    if (
      (form.scoreType === 'lte' && value >= form.primaryFilter)
      || (form.scoreType === 'gte' && value <= form.primaryFilter)
    ) {
      dispatch(setFormField('secondaryFilter', value));
    } else {
      const newSettings = {
        primaryFilter: value,
        secondaryFilter: value,
      };
      dispatch(setFormFields(newSettings));
    }
  };

  const handleChange = (e, id, value) => {
    if (id === 'minAbundance') {
      dispatch(setFormField('minAbundance', value));
    } if (id === 'primaryFilter') {
      handleChangePrimaryFilter(value);
    } if (id === 'scoreType') {
      handleScoreType(value);
    } if (id === 'secondaryFilter') {
      handleChangeSecondaryFilter(value);
    }
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
