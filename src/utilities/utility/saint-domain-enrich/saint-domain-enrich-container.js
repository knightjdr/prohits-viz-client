import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaintDomainEnrich from './saint-domain-enrich';

import { selectState } from '../../../state/selector/general';
import { setUtilityField } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const SaintDomainEnrichContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const {
    background,
    fdr,
    idType,
    topPreys,
  } = useSelector((state) => selectState(state, 'utilities'));

  const handleNumericUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, Number(value)));
  };

  const handleStringUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  useOnMount(() => {
    if (!background) {
      dispatch(setUtilityField('background', 'all'));
    } if (typeof fdr !== 'number') {
      dispatch(setUtilityField('fdr', 0.01));
    } if (!idType) {
      dispatch(setUtilityField('idType', 'refseqp'));
    } if (typeof topPreys !== 'number') {
      dispatch(setUtilityField('topPreys', 0));
    }
  });

  return (
    <SaintDomainEnrich
      errors={errors}
      background={background}
      fdr={fdr}
      handleNumericUtilityField={handleNumericUtilityField}
      handleStringUtilityField={handleStringUtilityField}
      idType={idType}
      topPreys={topPreys}
    />
  );
};

SaintDomainEnrichContainer.propTypes = {
  errors: PropTypes.shape({
    background: PropTypes.string,
    fdr: PropTypes.string,
    idType: PropTypes.string,
    topPreys: PropTypes.string,
  }).isRequired,
};

export default SaintDomainEnrichContainer;
