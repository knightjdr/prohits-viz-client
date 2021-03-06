import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Resize from './resize';
import useWindowDimension from '../../../../../../../hooks/window-size/use-window-dimension';
import {
  MIN_WIDTH,
  viewportPadding,
} from '../dimensions';

const ResizeContainer = ({
  containerDimensions,
  setContainerDimensions,
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownReference, setMouseDownReference] = useState({});

  const windowSize = useWindowDimension(0);

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
      const maxHeight = windowSize.height - viewportPadding.height;
      const maxWidth = windowSize.width - viewportPadding.width;
      const { height, width } = containerDimensions;
      const { clientX, clientY } = e;

      const deltaX = mouseDownReference.x - clientX;
      const deltaY = mouseDownReference.y - clientY;

      const newHeight = height - deltaY;
      let newWidth = width + deltaX;

      if (newWidth > maxWidth) {
        newWidth = maxWidth;
      } else if (newWidth < MIN_WIDTH) {
        newWidth = MIN_WIDTH;
      }

      setContainerDimensions({
        height: newHeight < maxHeight ? newHeight : maxHeight,
        width: newWidth,
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
