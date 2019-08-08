import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Popconfirm from './popconfirm';

const PopconfirmContainer = ({
  onConfirm,
  placement,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({
    horizontal: placement[0],
    vertical: placement[1],
    x: null,
    y: null,
  });
  const ref = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (e) => {
    onConfirm(e);
  };

  const handleClick = (e) => {
    const { target, pageX, pageY } = e;
    if (target === ref.current) {
      setPosition({
        ...position,
        x: pageX,
        y: pageY,
      });
      setOpen(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <Popconfirm
      handleClick={handleClick}
      handleClose={handleClose}
      handleConfirm={handleConfirm}
      handleKeyPress={handleKeyPress}
      open={open}
      position={position}
      ref={ref}
      {...props}
    />
  );
};

PopconfirmContainer.defaultProps = {
  placement: ['center', 'bottom'],
};

PopconfirmContainer.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  placement: PropTypes.arrayOf(PropTypes.string),
};

export default PopconfirmContainer;
