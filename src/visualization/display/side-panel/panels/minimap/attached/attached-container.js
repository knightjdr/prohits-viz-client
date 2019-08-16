import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Attached from './attached';
import useWindowDimension from '../../../../../../hooks/window-size/use-window-dimension';
import { scaleDimensions } from '../image/dimensions';

const AttachedContainer = ({
  children,
  imageSize,
}) => {
  const [containerDimensions, setContainerDimensions] = useState({ height: 0, width: 0 });

  const windowSize = useWindowDimension(0);

  useEffect(() => {
    const maxHeight = windowSize.height - 160;
    const maxWidth = windowSize.width < 390 ? windowSize.width - 30 : 320;
    const [height, width] = scaleDimensions(imageSize.height, imageSize.width, maxHeight, maxWidth);
    setContainerDimensions({
      height,
      width,
    });
  }, [imageSize.height, imageSize.width, windowSize.height, windowSize.width]);

  return (
    <Attached containerDimensions={containerDimensions}>
      {children}
    </Attached>
  );
};

AttachedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  imageSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

export default AttachedContainer;
