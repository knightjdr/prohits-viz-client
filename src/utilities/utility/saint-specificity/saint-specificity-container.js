import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaintSpecificity, { defaultFieldValues } from './saint-specificity';

import useOnMount from '../../../hooks/on-mount/use-on-mount';
import { selectState } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';

const SaintSpecificityContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const { controlSubtract, metric } = useSelector((state) => selectState(state, 'utilities'));

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <SaintSpecificity
      controlSubtract={controlSubtract}
      error={errors}
      handleUtilityField={handleUtilityField}
      metric={metric}
    />
  );
};

SaintSpecificityContainer.propTypes = {
  errors: PropTypes.shape({
    controlSubtract: PropTypes.string,
    metric: PropTypes.string,
  }).isRequired,
};

export default SaintSpecificityContainer;
