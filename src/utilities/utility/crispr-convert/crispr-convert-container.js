import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CrisprConvert from './crispr-convert';

import { selectState } from '../../../state/selector/general';
import { setUtilityField } from '../../../state/utilities/utilities-actions';

const CrisprConvertContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const { tool } = useSelector((state) => selectState(state, 'utilities'));

  const handleStringUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  return (
    <CrisprConvert
      errors={errors}
      handleStringUtilityField={handleStringUtilityField}
      tool={tool}
    />
  );
};

CrisprConvertContainer.propTypes = {
  errors: PropTypes.shape({
    tool: PropTypes.string,
  }).isRequired,
};

export default CrisprConvertContainer;
