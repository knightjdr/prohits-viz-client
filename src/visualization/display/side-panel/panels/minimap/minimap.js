import PropTypes from 'prop-types';
import React from 'react';

import Attached from './attached/attached';
import Detached from './detached/detached-container';
import Title from './title/title';

import './minimap.css';

const Minimap = ({
  attached,
  minimap,
  toggleAttached,
}) => (
  <div className="panel__minimap">
    <Title
      attached={attached}
      toggleAttached={toggleAttached}
    />
    {
      attached
        ? (
          <Attached
            minimap={minimap.syncedImage || minimap.image}
          />
        )
        : (
          <Detached
            minimap={minimap.syncedImage || minimap.image}
            toggleAttached={toggleAttached}
          />
        )
    }
  </div>
);

Minimap.propTypes = {
  attached: PropTypes.bool.isRequired,
  minimap: PropTypes.shape({
    image: PropTypes.string,
    syncedImage: PropTypes.string,
  }).isRequired,
  toggleAttached: PropTypes.func.isRequired,
};

export default Minimap;
