import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Annotations from './annotations';

import deepCopy from '../../../../utils/deep-copy';
import scalePositionPartial from '../markup/scale-dimensions-partial';
import useTranslation from '../translation/use-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateAnnotations } from '../../../../state/visualization/markup/annotation-actions';

const AnnotationsContainer = () => {
  const dispatch = useDispatch();

  const annotations = useSelector((state) => selectData(state, 'annotations'));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const translation = useTranslation();

  const { fontSize, list } = annotations;
  const { columns, rows } = dimensions;
  const { cellSize } = settings;

  const imageDimensions = {
    height: cellSize * rows,
    width: cellSize * columns,
  };
  const scalePosition = scalePositionPartial(imageDimensions);

  const handleAnnotationDeletion = (id) => {
    const updatedAnnotations = deepCopy(list);
    delete updatedAnnotations[id];
    dispatch(updateAnnotations(updatedAnnotations));
  };

  return (
    <Annotations
      cellSize={cellSize}
      fontSize={fontSize}
      handleAnnotationDeletion={handleAnnotationDeletion}
      imageDimensions={imageDimensions}
      list={list}
      scalePosition={scalePosition}
      translation={translation}
    />
  );
};

const ShowComponent = () => {
  const show = useSelector((state) => selectDataProperty(state, 'annotations', 'show'));

  return show && <AnnotationsContainer />;
};

export default ShowComponent;
