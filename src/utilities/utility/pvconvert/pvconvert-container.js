import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PVConvert from './pvconvert';

import { selectState } from '../../../state/selector/general';
import { setUtilityField } from '../../../state/utilities/utilities-actions';
import useOnMount from '../../../hooks/on-mount/use-on-mount';

const PVConvertContainer = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => selectState(state, 'utilities'));

  const handleUtilityField = (e, id, value) => {
    dispatch(setUtilityField(id, value));
  };

  useOnMount(() => {
    if (!fields.imageType) {
      dispatch(setUtilityField('imageType', 'dotplot'));
    }
  });

  return (
    <PVConvert
      handleUtilityField={handleUtilityField}
      imageType={fields.imageType}
    />
  );
};

export default PVConvertContainer;
