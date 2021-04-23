import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Markers from './markers';

import deepCopy from '../../../../utils/deep-copy';
import scaleDimensionsPartial from '../markup/scale-dimensions-partial';
import useTranslation from '../translation/use-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { updateMarkers } from '../../../../state/visualization/markup/marker-actions';

const MarkersContainer = () => {
  const dispatch = useDispatch();

  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const markers = useSelector((state) => selectData(state, 'markers'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const translation = useTranslation('markerClipPath');

  const { color, list } = markers;
  const { columns, rows } = dimensions;
  const { cellSize } = settings;

  const imageDimensions = {
    height: cellSize * rows,
    width: cellSize * columns,
  };
  const scaleDimensions = scaleDimensionsPartial(imageDimensions);

  const handleMarkerDeletion = (id) => {
    const updatedMarkers = deepCopy(list);
    delete updatedMarkers[id];
    dispatch(updateMarkers(updatedMarkers));
  };

  return (
    <Markers
      color={color}
      handleMarkerDeletion={handleMarkerDeletion}
      list={list}
      scaleDimensions={scaleDimensions}
      translation={translation}
    />
  );
};

const ShowComponent = () => {
  const show = useSelector((state) => selectDataProperty(state, 'markers', 'show'));

  return show && <MarkersContainer />;
};

export default ShowComponent;
