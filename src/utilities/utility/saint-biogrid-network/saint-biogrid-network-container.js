import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextBiogridNetwork, { defaultFieldValues } from '../text-biogrid-network/text-biogrid-network';

import { selectState } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const SaintBiogridNetworkContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const {
    evidenceList,
    fdr,
    idType,
    includeEvidence,
    includePrimaryInteractions,
    includeSaintInteractions,
    includeSecondaryInteractions,
    interSpeciesExcluded,
    isSaint,
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
    dispatch(setUtilityFields({
      ...defaultFieldValues,
      isSaint: true,
    }));
  });

  return (
    <TextBiogridNetwork
      errors={errors}
      evidenceList={evidenceList}
      fdr={fdr}
      handleEvidenceListField={handleEvidenceListField}
      handleIncludeEvidenceField={handleIncludeEvidenceField}
      handleNumericUtilityField={handleNumericUtilityField}
      handleUtilityField={handleUtilityField}
      idType={idType}
      includeEvidence={includeEvidence}
      includePrimaryInteractions={includePrimaryInteractions}
      includeSaintInteractions={includeSaintInteractions}
      includeSecondaryInteractions={includeSecondaryInteractions}
      interSpeciesExcluded={interSpeciesExcluded}
      isSaint={isSaint}
      max={max}
      throughputTag={throughputTag}
    />
  );
};

SaintBiogridNetworkContainer.propTypes = {
  errors: PropTypes.shape({
    evidenceList: PropTypes.string,
    fdr: PropTypes.string,
    idType: PropTypes.string,
    includeEvidence: PropTypes.string,
    includePrimaryInteractions: PropTypes.string,
    includeSaintInteractions: PropTypes.string,
    includeSecondaryInteractions: PropTypes.string,
    interSpeciesExcluded: PropTypes.string,
    max: PropTypes.string,
    throughputTag: PropTypes.string,
  }).isRequired,
};

export default SaintBiogridNetworkContainer;
