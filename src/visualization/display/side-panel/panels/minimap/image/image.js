import PropTypes from 'prop-types';
import React from 'react';

import Annotations from './annotations/annotation-container';
import Markers from './markers/marker-container';
import SearchResult from './search-results/search-results-container';
import SynchingStatus from '../sync/synching-status';

import './image.css';
import './search-results/search-results.css';

const Image = ({
  handleClick,
  handleKeyPress,
  imgLimits,
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
          alt="Mini map"
          src={minimap.syncedImage || minimap.image}
          style={{
            maxHeight: imgLimits.height,
            maxWidth: imgLimits.width,
          }}
        />
        <Markers />
        <Annotations />
        <SearchResult />
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
  imgLimits: PropTypes.shape({
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  minimap: PropTypes.shape({
    image: PropTypes.string,
    isSyncing: PropTypes.bool,
    needSyncing: PropTypes.bool,
    syncError: PropTypes.bool,
    syncedImage: PropTypes.string,
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
