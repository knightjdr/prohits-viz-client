import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SelectionOverlay from './selection-overlay';

import calculateCellFromCursor from './calculate-cell-from-cursor';
import calculateFractionalSelection from './calculate-fractional-selection';
import calculateSelectionPosition from './calculate-selection-position';
import calculateSelectionSize from './calculate-selection-size';
import extractSelection from './extract-selection';
import { addMarker } from '../../../../../state/visualization/markup/marker-actions';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import usePOI from '../../poi/use-poi';

const defaultSelection = {
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
  const dispatch = useDispatch();
  const startPosition = useRef(null);
  const [selectionPosition, setSelectionPosition] = useState({ ...defaultSelection.position });
  const [selectionDimensions, setSelectionDimensions] = useState({ ...defaultSelection.dimensions });

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));
  const recordSelections = useSelector(state => selectDataProperty(state, 'markers', 'record'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const poi = usePOI();

  const { cellSize } = settings;

  const cursorOptions = {
    cellSize,
    dimensions,
    ref: gridRef,
  };

  const selectionOptions = {
    cellSize,
    columnOrder,
    dimensions,
    position,
    record: recordSelections,
    rowOrder,
  };

  const createMarker = useCallback(
    (rect) => {
      if (selectionOptions.record) {
        const markerDimensions = calculateFractionalSelection(rect, selectionOptions);
        const id = nanoid();
        dispatch(addMarker(id, markerDimensions));
      }
      const selection = extractSelection(rect, selectionOptions);
      poi.replace(selection.columns, 'columns');
      poi.replace(selection.rows, 'rows');
    },
    [dispatch, poi, selectionOptions],
  );

  const updateRect = useCallback(
    (e) => {
      const currentCoordinates = calculateCellFromCursor(e, cursorOptions);
      const newPosition = calculateSelectionPosition(startPosition.current, currentCoordinates);
      const size = calculateSelectionSize(startPosition.current, currentCoordinates);
      setSelectionDimensions(size);
      setSelectionPosition(newPosition);
      return {
        position: newPosition,
        size,
      };
    },
    [cursorOptions],
  );

  const mouseUp = useCallback(
    (e) => {
      const rect = updateRect(e);
      startPosition.current = null;
      window.removeEventListener('mousemove', updateRect);
      window.removeEventListener('mouseup', mouseUp);
      createMarker(rect);
    },
    [createMarker, updateRect],
  );

  const mouseDown = useCallback(
    (e) => {
      const rect = updateRect(e);
      startPosition.current = rect.position;
      window.addEventListener('mousemove', updateRect);
      window.addEventListener('mouseup', mouseUp);
    },
    [mouseUp, updateRect],
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
