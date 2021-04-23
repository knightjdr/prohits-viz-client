import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import calculateTranslation from './calculate-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const useTranslation = () => {
  const position = useSelector((state) => selectData(state, 'position'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const { cellSize } = settings;

  const translation = useMemo(
    () => calculateTranslation(cellSize, position.x, position.y),
    [cellSize, position.x, position.y],
  );

  return translation;
};

export default useTranslation;
