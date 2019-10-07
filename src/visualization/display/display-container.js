import React from 'react';
import { useSelector } from 'react-redux';

import Display from './display';
import { selectStateProperty } from '../../state/selector/general';

const DisplayContainer = () => {
  const imageType = useSelector(state => selectStateProperty(state, 'parameters', 'imageType'));

  return (
    <Display
      imageType={imageType}
    />
  );
};

export default DisplayContainer;
