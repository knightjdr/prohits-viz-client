import PropTypes from 'prop-types';
import React from 'react';

import Attached from './attached/attached';
import Detached from './detached/detached-container';
import Image from './image/image';
import Title from './title/title';

import './minimap.css';

const Minimap = ({
  attached,
  handleClick,
  handleKeyPress,
  minimap,
  pageOutline,
  syncMinimap,
  toggleAttached,
  updateMinimap,
}) => {
  const image = (
    <Image
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      minimap={minimap}
      pageOutline={pageOutline}
      syncMinimap={syncMinimap}
    />
  );

  return (
    <div className="panel__minimap">
      <Title
        attached={attached}
        toggleAttached={toggleAttached}
        updateMinimap={updateMinimap}
      />
      {
        attached
          ? (
            <Attached>
              {image}
            </Attached>
          )
          : (
            <Detached
              minimap={minimap.syncedImage || minimap.image}
              toggleAttached={toggleAttached}
            >
              {image}
            </Detached>
          )
      }
    </div>
  );
};

Minimap.propTypes = {
  attached: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  minimap: PropTypes.shape({
    image: PropTypes.string,
    syncedImage: PropTypes.string,
  }).isRequired,
  pageOutline: PropTypes.shape({}).isRequired,
  syncMinimap: PropTypes.func.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  updateMinimap: PropTypes.func.isRequired,
};

export default Minimap;