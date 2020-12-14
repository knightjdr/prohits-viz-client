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
    if (id === 'abundanceCap') {
      handleChangeAbundanceCap(value);
    } if (id === 'minAbundance') {
      handleChangeMinAbundance(value);
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
