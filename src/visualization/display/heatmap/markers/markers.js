import PropTypes from 'prop-types';
import React from 'react';

import Marker from './marker-container';

const Markers = ({
  clipPath,
  clipPathID,
  color,
  handleMarkerDeletion,
  list,
  scaleDimensions,
  translation,
}) => (
  <>
    {clipPath}
    <g
      clipPath={`url(#${clipPathID})`}
      transform={translation}
    >
      {
        Object.entries(list).map(([id, marker]) => (
          <Marker
            color={color}
            dimensions={marker}
            handleMarkerDeletion={handleMarkerDeletion}
            id={id}
            key={id}
            scaleDimensions={scaleDimensions}
          />
        ))
      }
    </g>
  </>
);

Markers.propTypes = {
  clipPath: PropTypes.node.isRequired,
  clipPathID: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleMarkerDeletion: PropTypes.func.isRequired,
  list: PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    text: PropTypes.string,
  }).isRequired,
  scaleDimensions: PropTypes.func.isRequired,
  translation: PropTypes.string.isRequired,
};

export default Markers;
