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

  const handleClick = (e) => {
    const { target, pageX, pageY } = e;
    if (ref.current.contains(target)) {
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
