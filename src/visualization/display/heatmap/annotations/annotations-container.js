import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Annotations from './annotations';

import deepCopy from '../../../../utils/deep-copy';
import useTranslation from '../translation/use-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateAnnotations } from '../../../../state/visualization/markup/annotation-actions';

const AnnotationsContainer = () => {
  const dispatch = useDispatch();

  const annotations = useSelector(state => selectData(state, 'annotations'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const clipPathID = 'annotationClipPath';
  const translation = useTranslation('annotationClipPath');

  const { fontSize, list } = annotations;
  const { columns, rows } = dimensions;
  const { cellSize } = settings;

  const height = cellSize * rows;
  const width = cellSize * columns;

  const handleAnnotationDeletion = (id) => {
    const updatedAnnotations = deepCopy(list);
    delete updatedAnnotations[id];
    dispatch(updateAnnotations(updatedAnnotations));
  };

  return (
    <Annotations
      cellSize={cellSize}
      clipPath={translation.clipPath}
      clipPathID={clipPathID}
      fontSize={fontSize}
      handleAnnotationDeletion={handleAnnotationDeletion}
      height={height}
      list={list}
      translation={translation.translation}
      width={width}
    />
  );
};

const ShowComponent = () => {
  const show = useSelector(state => selectDataProperty(state, 'annotations', 'show'));

  return show && <AnnotationsContainer />;
};

export default ShowComponent;
