import PropTypes from 'prop-types';
import React from 'react';

import Marker from './marker-container';

import './markers.css';

const Markers = ({
  color,
  handleMarkerDeletion,
  list,
  scaleDimensions,
  translation,
}) => (
  <>
    <g transform={translation}>
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
