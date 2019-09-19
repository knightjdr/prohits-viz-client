import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import { createPortal } from 'react-dom';

import Header from './header/header-container';
import Resize from './resize/resize-container';

import './detached.css';

const Detached = ({
  children,
  containerDimensions,
  opaque,
  panelPosition,
  portal,
  setContainerDimensions,
  setOpacity,
  setPanelPosition,
  setVisibility,
  toggleAttached,
  visibility,
}) => (
  containerDimensions.height
    ? createPortal(
      <div
        className={`minimap__detached ${opaque ? 'minimap_opaque' : 'minimap_transparent'}`}
        style={{
          ...panelPosition,
        }}
      >
        <Header
          opaque={opaque}
          panelPosition={panelPosition}
          setOpacity={setOpacity}
          setPanelPosition={setPanelPosition}
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
          {
            cloneElement(
              children,
              {
                imgLimits: {
                  height: containerDimensions.height - 10,
                  width: containerDimensions.width - 10,
                },
              },
            )
          }
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

Detached.propTypes = {
  children: PropTypes.node.isRequired,
  containerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
  opaque: PropTypes.bool.isRequired,
  panelPosition: PropTypes.shape({
    right: PropTypes.number,
    top: PropTypes.number,
  }).isRequired,
  portal: PropTypes.shape({}).isRequired,
  setContainerDimensions: PropTypes.func.isRequired,
  setOpacity: PropTypes.func.isRequired,
  setPanelPosition: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};
export default Detached;
