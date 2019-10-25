import React, { useMemo } from 'react';
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
  const dispatch = useDispatch();
  const annotations = useSelector(state => selectData(state, 'annotations'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));

  const { fontSize, show } = annotations;

  const defaultPosition = useMemo(
    () => calculateNewPosition(dimensions, position),
    [dimensions, position],
  );

  const handleAddAnnotation = (e, elementID, value) => {
    if (value) {
      const annotationID = nanoID();
      dispatch(addAnnotation(annotationID, value, defaultPosition));
    }
  };

  const handleClearAll = () => {
    dispatch(clearAllAnnotations());
  };

  const handleFontSizeChange = (e, id, value) => {
    dispatch(changeAnnotationSetting('fontSize', value));
  };

  const handleToggleAnnotations = () => {
    dispatch(toggleAnnotations(!show));
  };

  return (
    <Annotation
      fontSize={fontSize}
      handleAddAnnotation={handleAddAnnotation}
      handleClearAll={handleClearAll}
      handleFontSizeChange={handleFontSizeChange}
      handleToggleAnnotations={handleToggleAnnotations}
      show={show}
    />
  );
};

export default AnnotationContainer;
