import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaintFEA from './saint-fea';

import { selectState } from '../../../state/selector/general';
import { setUtilityField } from '../../../state/utilities/utilities-actions';
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
    if (typeof fdr !== 'number') {
      dispatch(setUtilityField('fdr', 0.01));
    } if (typeof topPreys !== 'number') {
      dispatch(setUtilityField('topPreys', 0));
    }
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
  }).isRequired,
};

export default SaintFEAContainer;
