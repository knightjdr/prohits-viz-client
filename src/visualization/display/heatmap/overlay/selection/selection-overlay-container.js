import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import SelectionOverlay from './selection-overlay';

import calculateCellFromCursor from './calculate-cell-from-cursor';
import calculateRectPosition from './calculate-rect-position';
import calculateSelectionSize from './calculate-selection-size';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';


const defaultRect = {
  dimensions: {
    height: 0,
    width: 0,
  },
  position: {
    x: 0,
    y: 0,
  },
};

const SelectionOverlayContainer = ({
  gridRef,
}) => {
  const startPosition = useRef(null);
  const [selectionPosition, setSelectionPosition] = useState({ ...defaultRect.position });
  const [selectionDimensions, setSelectionDimensions] = useState({ ...defaultRect.dimensions });

  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const { cellSize } = settings;

  const cursorOptions = {
    cellSize,
    dimensions,
    position,
    ref: gridRef,
  };

  const updateRect = useCallback(
    (e) => {
      const cellPosition = calculateCellFromCursor(e, cursorOptions);
      const size = calculateSelectionSize(startPosition.current, cellPosition.coordinates);
      setSelectionDimensions(size);
      setSelectionPosition(calculateRectPosition(startPosition.current, cellPosition.coordinates));
      return cellPosition;
    },
    [cursorOptions],
  );

  const mouseMove = useCallback(
    (e) => {
      updateRect(e);
    },
    [updateRect],
  );

  const mouseUp = useCallback(
    (e) => {
      updateRect(e);
      startPosition.current = null;
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    },
    [mouseMove, updateRect],
  );

  const mouseDown = useCallback(
    (e) => {
      startPosition.current = updateRect(e);
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    },
    [mouseMove, mouseUp, updateRect],
  );

  useEffect(() => {
    gridRef.addEventListener('mousedown', mouseDown);
    return () => {
      gridRef.removeEventListener('mousedown', mouseDown);
    };
  }, [gridRef, mouseDown]);

  return (
    <SelectionOverlay
      dimensions={selectionDimensions}
      position={selectionPosition}
    />
  );
};

SelectionOverlayContainer.defaultProps = {
  gridRef: {
    addEventListener: () => {},
    removeEventListener: () => {},
  },
};

SelectionOverlayContainer.propTypes = {
  gridRef: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
  }),
};

export default SelectionOverlayContainer;
