import React, { useMemo, useState } from 'react';
import nanoID from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import Annotation from './annotation';

import calculateNewPosition from './calculate-new-position';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';
import {
  addAnnotation,
  changeAnnotationSetting,
  clearAllAnnotations,
  toggleAnnotations,
} from '../../../../../../state/visualization/markup/annotation-actions';

const AnnotationContainer = () => {
  const [newAnnotation, setNewAnnotation] = useState('');
  const dispatch = useDispatch();
  const annotations = useSelector(state => selectData(state, 'annotations'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));

  const { color, fontSize, show } = annotations;

  const defaultPosition = useMemo(
    () => calculateNewPosition(dimensions, position),
    [dimensions, position],
  );

  const handleAddAnnotation = () => {
    if (newAnnotation) {
      const id = nanoID();
      dispatch(addAnnotation(id, newAnnotation, defaultPosition));
    }
  };

  const handleAnnotationChange = (e, id, value) => {
    setNewAnnotation(value);
  };

  const handleClearAll = () => {
    dispatch(clearAllAnnotations);
  };

  const handleColorChange = (value) => {
    dispatch(changeAnnotationSetting('color', value));
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
      handleAnnotationChange={handleAnnotationChange}
      handleClearAll={handleClearAll}
      handleColorChange={handleColorChange}
      handleFontSizeChange={handleFontSizeChange}
      handleToggleAnnotations={handleToggleAnnotations}
      newAnnotation={newAnnotation}
      show={show}
    />
  );
};

export default AnnotationContainer;
