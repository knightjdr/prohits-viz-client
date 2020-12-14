import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import calculateTranslation from './calculate-translation';
import createClipPath from './create-clip-path';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const useTranslation = (clipPathID) => {
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const position = useSelector((state) => selectData(state, 'position'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const { cellSize } = settings;

  const clipPath = useMemo(
    () => createClipPath(
      clipPathID,
      cellSize,
      position.x,
      position.y,
      dimensions.height,
      dimensions.width,
    ),
    [cellSize, clipPathID, position.x, position.y, dimensions.height, dimensions.width],
  );
  const translation = useMemo(
    () => calculateTranslation(cellSize, position.x, position.y),
    [cellSize, position.x, position.y],
  );

  return {
    clipPath,
    translation,
  };
};

export default useTranslation;
