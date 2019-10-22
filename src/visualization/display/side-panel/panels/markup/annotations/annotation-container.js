import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Annotation from './annotation';

import { selectData } from '../../../../../../state/selector/visualization/data-selector';
import { setAnnotationColor, toggleAnnotations } from '../../../../../../state/visualization/markup/annotation-actions';

const AnnotationContainer = () => {
  const dispatch = useDispatch();
  const annotations = useSelector(state => selectData(state, 'annotations'));

  const { color, showAnnotations } = annotations;

  const handleColorChange = (newColor) => {
    dispatch(setAnnotationColor(newColor));
  };

  const handleToggleAnnotations = () => {
    dispatch(toggleAnnotations(!showAnnotations));
  };

  return (
    <Annotation
      color={color}
      handleColorChange={handleColorChange}
      handleToggleAnnotations={handleToggleAnnotations}
      show={showAnnotations}
    />
  );
};

export default AnnotationContainer;
