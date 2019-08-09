import React from 'react';
import { useSelector } from 'react-redux';

import Display from './display';
import { stateSelectorProp } from '../../state/selector/general';

const DisplayContainer = () => {
  const imageType = useSelector(state => stateSelectorProp(state, 'parameters', 'imageType'));

  return (
    <Display
      imageType={imageType}
    />
  );
};

export default DisplayContainer;
