import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';

import Header from './header';
import Image from '../image/image';

import './detached.css';

const Detached = ({
  containerDimensions,
  minimap,
  portal,
  position,
  showMinimap,
  toggleAttached,
  toggleMinimap,
}) => (
  containerDimensions.height
    ? createPortal(
      <div
        className="minimap__detached"
        style={position}
      >
        <Header
          showMinimap={showMinimap}
          toggleAttached={toggleAttached}
          toggleMinimap={toggleMinimap}
        />
        <div
          className="minimap__detached-inner"
          style={{
            display: showMinimap ? 'flex' : 'none',
          }}
        >
          <div style={containerDimensions}>
            <Image
              minimap={minimap}
            />
          </div>
        </div>
      </div>,
      portal,
    )
    : null
);

Detached.defaultProps = {
  minimap: null,
};

Detached.propTypes = {
  containerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  minimap: PropTypes.string,
  portal: PropTypes.shape({}).isRequired,
  position: PropTypes.shape({
    right: PropTypes.number,
    top: PropTypes.number,
  }).isRequired,
  showMinimap: PropTypes.bool.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  toggleMinimap: PropTypes.func.isRequired,
};
export default Detached;
