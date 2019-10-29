import PropTypes from 'prop-types';
import React from 'react';

import Marker from './marker';

const MarkerContainer = ({
  dimensions,
  handleMarkerDeletion,
  id,
  scaleDimensions,
  ...props
}) => {
  const handleDeletion = () => {
    handleMarkerDeletion(id);
  };

  const scaledDimensions = scaleDimensions(dimensions);
  const timesPosition = {
    x: scaledDimensions.x + (scaledDimensions.width / 2) - 7,
    y: scaledDimensions.y - 7,
  };

  return (
    <Marker
      dimensions={scaledDimensions}
      handleDeletion={handleDeletion}
      timesPosition={timesPosition}
      {...props}
    />
  );
};

MarkerContainer.propTypes = {
  dimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  handleMarkerDeletion: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  scaleDimensions: PropTypes.func.isRequired,
};

export default MarkerContainer;
