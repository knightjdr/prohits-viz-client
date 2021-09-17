import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaintStats, { defaultFieldValues } from './saint-stats';

import { selectStateProperty } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const SaintStatsContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const fdr = useSelector((state) => selectStateProperty(state, 'utilities', 'fdr'));

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, Number(value)));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <SaintStats
      error={errors.fdr}
      fdr={fdr}
      handleUtilityField={handleUtilityField}
    />
  );
};

SaintStatsContainer.propTypes = {
  errors: PropTypes.shape({
    fdr: PropTypes.string,
  }).isRequired,
};

export default SaintStatsContainer;
