import PropTypes from 'prop-types';
import React from 'react';

import Marker from './marker';

const Markers = ({
  markers,
}) => (
  <>
    {
      markers.show
        ? (
          Object.entries(markers.list).map(([id, marker]) => (
            <Marker
              color={markers.color}
              dimensions={marker}
              key={id}
            />
          ))
        )
        : null
    }
  </>
);

Markers.propTypes = {
  markers: PropTypes.shape({
    color: PropTypes.string.isRequired,
    list: PropTypes.shape({}).isRequired,
    show: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Markers;
