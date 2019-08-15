import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Resize from './resize';
import { dimensions } from '../dimensions';

const ResizeContainer = ({
  containerDimensions,
  setContainerDimensions,
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownReference, setMouseDownReference] = useState({});

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    setMouseDownReference({
      x: clientX,
      y: clientY,
    });
    setMouseDown(true);
  };

  useEffect(() => {
    const handleMouseMove = async (e) => {
      const minWidth = 165;

      const { height, width } = containerDimensions;
      const { clientX, clientY } = e;

      const deltaX = mouseDownReference.x - clientX;
      const deltaY = mouseDownReference.y - clientY;

      const newHeight = height - deltaY;
      const newWidth = width + deltaX < minWidth ? minWidth : width + deltaX;

      const newDimensions = dimensions(newHeight, newWidth);
      setContainerDimensions({
        height: newDimensions.height,
        width: newDimensions.width,
      });
      setMouseDownReference({
        x: clientX,
        y: clientY,
      });
    };

    const handleMouseUp = () => {
      setMouseDown(false);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseup', handleMouseUp, { passive: true });
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return <Resize handleMouseDown={handleMouseDown} />;
};

ResizeContainer.propTypes = {
  containerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  setContainerDimensions: PropTypes.func.isRequired,
};

export default ResizeContainer;
