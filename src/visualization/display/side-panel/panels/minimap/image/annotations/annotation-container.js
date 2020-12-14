import React from 'react';
import { useSelector } from 'react-redux';

import Annotation from './annotations';

import { selectData } from '../../../../../../../state/selector/visualization/data-selector';

const AnnotationContainer = () => {
  const annotations = useSelector((state) => selectData(state, 'annotations'));

  return (
    <Annotation
      annotations={annotations}
    />
  );
};

export default AnnotationContainer;
