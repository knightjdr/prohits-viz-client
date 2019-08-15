import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';

import Header from './header/header-container';
import Image from '../image/image';
import Resize from './resize/resize-container';

import './detached.css';

const Detached = ({
  containerDimensions,
  minimap,
  opaque,
  portal,
  position,
  setContainerDimensions,
  setOpacity,
  setPosition,
  setVisibility,
  toggleAttached,
  visibility,
}) => (
  containerDimensions.height
    ? createPortal(
      <div
        className={`minimap__detached ${opaque ? 'minimap_opaque' : 'minimap_transparent'}`}
        style={position}
      >
        <Header
          opaque={opaque}
          position={position}
          setOpacity={setOpacity}
          setPosition={setPosition}
          setVisibility={setVisibility}
          toggleAttached={toggleAttached}
          visibility={visibility}
        />
        <div
          className="minimap__detached-image"
          style={{
            ...containerDimensions,
            display: visibility ? 'flex' : 'none',
          }}
        >
          <Image
            minimap={minimap}
          />
          <Resize
            containerDimensions={containerDimensions}
            setContainerDimensions={setContainerDimensions}
          />
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
  opaque: PropTypes.bool.isRequired,
  portal: PropTypes.shape({}).isRequired,
  position: PropTypes.shape({
    right: PropTypes.number,
    top: PropTypes.number,
  }).isRequired,
  setContainerDimensions: PropTypes.func.isRequired,
  setOpacity: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};
export default Detached;
