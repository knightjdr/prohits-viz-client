import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import ModalButton from './modal-button';

const ModalButtonContainer = ({
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

  const openModal = (x, y) => {
    setPosition({
      ...position,
      x,
      y,
    });
    setOpen(true);
  };

  const handleClick = (e) => {
    const { pageX, pageY, target } = e;
    if (pageX === 0 && pageY === 0) {
      const rect = target.getBoundingClientRect();
      const x = rect.x + (rect.width / 2);
      const y = rect.y + (rect.height / 2);
      openModal(x, y);
    } else {
      openModal(pageX, pageY);
    }
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (key === 'Escape') {
      handleClose();
    }
  };

  return (
    <ModalButton
      handleClick={handleClick}
      handleClose={handleClose}
      handleKeyPress={handleKeyPress}
      open={open}
      position={position}
      ref={ref}
      {...props}
    />
  );
};

ModalButtonContainer.defaultProps = {
  name: 'modal-button',
  placement: ['center', 'bottom'],
};

ModalButtonContainer.propTypes = {
  name: PropTypes.string,
  placement: PropTypes.arrayOf(PropTypes.string),
};

export default ModalButtonContainer;
