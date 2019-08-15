import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Header from './header';

const HeaderContainer = ({
  opaque,
  position,
  setOpacity,
  setPosition,
  setVisibility,
  toggleAttached,
  visibility,
}) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownReference, setMouseDownReference] = useState({});

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    setMouseDownReference({
      x: clientX,
      y: clientY,
    });
    setMouseDown(true);
  };

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const toggleOpacity = () => {
    setOpacity(!opaque);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { right, top } = position;
      const { clientX, clientY } = e;
      const deltaX = mouseDownReference.x - clientX;
      const deltaY = mouseDownReference.y - clientY;
      setPosition({
        right: right + deltaX,
        top: top - deltaY,
      });
      setMouseDownReference({
        x: clientX,
        y: clientY,
      });
    };

    const handleMouseUp = () => {
      setMouseDown(false);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseup', handleMouseUp, { passive: true });
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <Header
      handleMouseDown={handleMouseDown}
      opaque={opaque}
      toggleAttached={toggleAttached}
      toggleOpacity={toggleOpacity}
      toggleVisibility={toggleVisibility}
      visibility={visibility}
    />
  );
};

HeaderContainer.propTypes = {
  opaque: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    right: PropTypes.number,
    top: PropTypes.number,
  }).isRequired,
  setOpacity: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setVisibility: PropTypes.func.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};

export default HeaderContainer;
