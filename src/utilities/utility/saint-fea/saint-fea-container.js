import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaintFEA, { defaultFieldValues } from './saint-fea';

import { selectState } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const SaintFEAContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const { fdr, topPreys } = useSelector((state) => selectState(state, 'utilities'));

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, Number(value)));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <SaintFEA
      errors={errors}
      fdr={fdr}
      handleUtilityField={handleUtilityField}
      topPreys={topPreys}
    />
  );
};

SaintFEAContainer.propTypes = {
  errors: PropTypes.shape({
    fdr: PropTypes.string,
    topPreys: PropTypes.string,
  }).isRequired,
};

export default SaintFEAContainer;
