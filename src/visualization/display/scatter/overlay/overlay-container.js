import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Overlay from './overlay';

import calculateCursorCoordinates from './calculate-cursor-coordinates';
import calculateSelectionCoordinates from '../../common/overlay/calculate-selection-coordinates';
import calculateSelectionSize from '../../common/overlay/calculate-selection-size';
import extractSelectedData from './extract-selected-data';
import { selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../state/selector/general';
import { updatePOI } from '../../../../state/visualization/analysis/poi-actions';

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

const OverlayContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const startPosition = useRef(null);
  const [selectionCoordinates, setSelectionCoordinates] = useState({ ...defaultSelection.position });
  const [selectionSize, setSelectionSize] = useState({ ...defaultSelection.dimensions });

  const activeSnapshot = useSelector((state) => selectStateProperty(state, 'tabs', 'activeSnapshot'));
  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const { scale } = useSelector((state) => selectDataProperty(state, 'display', 'transform'));

  const cursorOptions = {
    ref: ref.current,
    scale,
  };

  const updateRect = useCallback(
    (e) => {
      const currentCoordinates = calculateCursorCoordinates(e, cursorOptions);
      const newCoordinates = calculateSelectionCoordinates(startPosition.current, currentCoordinates);
      const size = calculateSelectionSize(startPosition.current, currentCoordinates);
      setSelectionSize(size);
      setSelectionCoordinates(newCoordinates);
      return {
        position: newCoordinates,
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

      const selectedPoints = extractSelectedData(rect, cursorOptions);
      if (selectedPoints.length > 0) {
        const updatedPOI = { points: selectedPoints };
        dispatch(updatePOI(updatedPOI));
      }
    },
    [updateRect],
  );

  const handleMouseDown = useCallback(
    (e) => {
      const { shiftKey } = e;
      if (shiftKey) {
        const rect = updateRect(e);
        startPosition.current = rect.position;
        window.addEventListener('mousemove', updateRect);
        window.addEventListener('mouseup', mouseUp);
      }
    },
    [mouseUp, updateRect],
  );

  useEffect(() => {
    setSelectionSize({
      height: 0,
      width: 0,
    });
  }, [activeSnapshot]);

  const strokeWidth = 1 / scale;

  return (
    <Overlay
      axisLength={axisLength}
      coordinates={selectionCoordinates}
      handleMouseDown={handleMouseDown}
      ref={ref}
      size={selectionSize}
      strokeWidth={strokeWidth}
    />
  );
};

export default OverlayContainer;
