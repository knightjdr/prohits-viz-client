import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Utilities from './utilities';

import { selectStateProperty } from '../state/selector/general';
import { setUtilityField, setUtilityFile } from '../state/utilities/utilities-actions';

const UtilitiesContainer = () => {
  const dispatch = useDispatch();
  const utility = useSelector((state) => selectStateProperty(state, 'utilities', 'utility'));

  const handleInputFile = (e, id, selectedFiles) => {
    const file = selectedFiles[0];
    dispatch(setUtilityFile(file));
  };

  const handleUtilityType = (e, id, value) => {
    dispatch(setUtilityField('utility', value));
  };

  const handleSubmit = () => {};

  return (
    <Utilities
      handleInputFile={handleInputFile}
      handleSubmit={handleSubmit}
      handleUtilityType={handleUtilityType}
      utility={utility}
    />
  );
};

export default UtilitiesContainer;
