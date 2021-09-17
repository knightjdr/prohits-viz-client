import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PVConvert, { defaultFieldValues } from './pvconvert';

import { selectStateProperty } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const PVConvertContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const imageType = useSelector((state) => selectStateProperty(state, 'utilities', 'imageType'));

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <PVConvert
      error={errors.imageType}
      handleUtilityField={handleUtilityField}
      imageType={imageType}
    />
  );
};

PVConvertContainer.propTypes = {
  errors: PropTypes.shape({
    imageType: PropTypes.string,
  }).isRequired,
};

export default PVConvertContainer;
