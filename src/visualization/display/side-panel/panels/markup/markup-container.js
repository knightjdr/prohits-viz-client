import React from 'react';
import { useSelector } from 'react-redux';

import Markup from './markup';

import { selectStateProperty } from '../../../../../state/selector/general';

const MarkupContainer = () => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  return (
    <Markup
      imageType={imageType}
    />
  );
};

export default MarkupContainer;
