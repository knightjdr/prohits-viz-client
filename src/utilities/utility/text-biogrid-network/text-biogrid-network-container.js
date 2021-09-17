import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextBiogridNetwork, { defaultFieldValues } from './text-biogrid-network';

import { selectState } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const TextBiogridNetworkContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const {
    evidenceList,
    idType,
    includeEvidence,
    includePrimaryInteractions,
    includeSecondaryInteractions,
    interSpeciesExcluded,
    max,
    throughputTag,
  } = useSelector((state) => selectState(state, 'utilities'));

  const handleEvidenceListField = (e, id, value) => {
    const newValue = value.includes('all') ? [] : value;
    dispatch(setUtilityField(id, newValue));
  };

  const handleIncludeEvidenceField = (e, id, value) => {
    dispatch(setUtilityField(id, value === 'true'));
  };

  const handleNumericUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, Number(value)));
  };

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <TextBiogridNetwork
      errors={errors}
      evidenceList={evidenceList}
      handleEvidenceListField={handleEvidenceListField}
      handleIncludeEvidenceField={handleIncludeEvidenceField}
      handleNumericUtilityField={handleNumericUtilityField}
      handleUtilityField={handleUtilityField}
      idType={idType}
      includeEvidence={includeEvidence}
      includePrimaryInteractions={includePrimaryInteractions}
      includeSecondaryInteractions={includeSecondaryInteractions}
      interSpeciesExcluded={interSpeciesExcluded}
      max={max}
      throughputTag={throughputTag}
    />
  );
};

TextBiogridNetworkContainer.propTypes = {
  errors: PropTypes.shape({
    evidenceList: PropTypes.string,
    idType: PropTypes.string,
    includeEvidence: PropTypes.string,
    includePrimaryInteractions: PropTypes.string,
    includeSecondaryInteractions: PropTypes.string,
    interSpeciesExcluded: PropTypes.string,
    max: PropTypes.string,
    throughputTag: PropTypes.string,
  }).isRequired,
};

export default TextBiogridNetworkContainer;
