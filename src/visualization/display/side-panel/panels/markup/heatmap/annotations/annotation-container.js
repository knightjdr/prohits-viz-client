import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Annotation from './annotation';

import useAnnotation from './use-annotation';
import {
  changeAnnotationSetting,
  clearAllAnnotations,
  toggleAnnotations,
} from '../../../../../../../state/visualization/markup/annotation-actions';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';

const AnnotationContainer = () => {
  const dispatch = useDispatch();
  const annotations = useSelector((state) => selectData(state, 'annotations'));
  const addAnnotation = useAnnotation();

  const { color, fontSize, show } = annotations;

  const handleAddAnnotation = (e, elementID, value) => {
    addAnnotation(value);
  };

  const handleClearAll = () => {
    dispatch(clearAllAnnotations());
  };

  const handleColorChange = (newColor) => {
    dispatch(changeAnnotationSetting('color', newColor));
  };

  const handleFontSizeChange = (e, id, value) => {
    dispatch(changeAnnotationSetting('fontSize', value));
  };

  const handleToggleAnnotations = () => {
    dispatch(toggleAnnotations(!show));
  };

  return (
    <Annotation
      color={color}
      fontSize={fontSize}
      handleAddAnnotation={handleAddAnnotation}
      handleClearAll={handleClearAll}
      handleColorChange={handleColorChange}
      handleFontSizeChange={handleFontSizeChange}
      handleToggleAnnotations={handleToggleAnnotations}
      show={show}
    />
  );
};

export default AnnotationContainer;
