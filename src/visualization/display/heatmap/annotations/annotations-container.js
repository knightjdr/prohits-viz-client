import React from 'react';
import { useSelector } from 'react-redux';

import Annotations from './annotations';

import useTranslation from '../translation/use-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const AnnotationsContainer = () => {
  const annotations = useSelector(state => selectData(state, 'annotations'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const clipPathID = 'annotationClipPath';
  const translation = useTranslation('annotationClipPath');

  const { fontSize, list, show } = annotations;
  const { columns, rows } = dimensions;
  const { cellSize } = settings;

  const height = cellSize * rows;
  const width = cellSize * columns;

  return (
    <Annotations
      cellSize={cellSize}
      clipPath={translation.clipPath}
      clipPathID={clipPathID}
      fontSize={fontSize}
      height={height}
      list={list}
      show={show}
      translation={translation.translation}
      width={width}
    />
  );
};

export default AnnotationsContainer;
