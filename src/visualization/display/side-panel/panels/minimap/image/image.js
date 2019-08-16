import PropTypes from 'prop-types';
import React from 'react';

import SynchingStatus from '../sync/synching-status';

import './image.css';

const Image = ({
  handleClick,
  handleKeyPress,
  minimap,
  pageOutline,
  syncMinimap,
}) => (
  (minimap.isSyncing || minimap.needSyncing || minimap.syncError)
    ? (
      <SynchingStatus
        isSyncing={minimap.isSyncing}
        needSyncing={minimap.needSyncing}
        syncError={minimap.syncError}
        syncMinimap={syncMinimap}
      />
    )
    : (
      <div
        className="minimap__image"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        role="button"
        tabIndex="-1"
      >
        <img
          alt="Minimap"
          src={minimap.synchedImage || minimap.image}
        />
        <span
          className="minimap__page-outline"
          style={pageOutline}
        />
      </div>
    )
);

Image.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  minimap: PropTypes.shape({
    image: PropTypes.string,
    isSyncing: PropTypes.bool,
    needSyncing: PropTypes.bool,
    syncError: PropTypes.bool,
    synchedImage: PropTypes.string,
  }).isRequired,
  pageOutline: PropTypes.shape({
    height: PropTypes.string,
    left: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    width: PropTypes.string,
  }).isRequired,
  syncMinimap: PropTypes.func.isRequired,
};

export default Image;
