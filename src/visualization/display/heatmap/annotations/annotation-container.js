import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Annotation from './annotation';

import calculateBoundaires from './calculate-boundaries';
import calculateNewPosition from './calculate-new-position';
import { updateAnnotationPosition } from '../../../../state/visualization/markup/annotation-actions';

const AnnotationContainer = ({
  cellSize,
  height,
  id,
  position,
  width,
  ...props
}) => {
  const [isMouseDown, setMouseIsDown] = useState(false);
  const [textPosition, setTextPosition] = useState(position);
  const cursorReference = useRef({});
  const newPosition = useRef(position);
  const dispatch = useDispatch();

  const fractionalBoundaries = useMemo(
    () => calculateBoundaires(cellSize, height, width),
    [cellSize, height, width],
  );

  const calculateDelta = cursorPosition => ({
    x: (cursorPosition.x - cursorReference.current.x) / width,
    y: (cursorPosition.y - cursorReference.current.y) / height,
  });

  const setCursorReference = (e) => {
    const { clientX: x, clientY: y } = e;
    cursorReference.current.x = x;
    cursorReference.current.y = y;
  };

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const cursorPosition = { x, y };
    const delta = calculateDelta(cursorPosition);
    newPosition.current = calculateNewPosition(position, delta, fractionalBoundaries);
    setTextPosition(newPosition.current);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    setMouseIsDown(false);
    dispatch(updateAnnotationPosition(id, newPosition.current));
  };

  const addListeners = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    setMouseIsDown(true);
    setCursorReference(e);
    addListeners();
  };

  return (
    <Annotation
      {...props}
      handleMouseDown={handleMouseDown}
      height={height}
      isMouseDown={isMouseDown}
      position={textPosition || position}
      width={width}
    />
  );
};

AnnotationContainer.propTypes = {
  cellSize: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default AnnotationContainer;
