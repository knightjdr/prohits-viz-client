import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import Modal from './modal';

import defineClassName from './define-classname';
import positionFromCursor from './position-from-cursor';
import positionFromViewport from './position-from-viewport';
import useClickOutside from '../../hooks/click-outside/use-click-outside';
import usePortal from '../../hooks/portal/use-portal';
import usePrevious from '../../hooks/previous/use-previous';

const ModalContainer = ({
  fromCursor,
  handleClose,
  isOpen,
  name,
  placement,
  ...props
}) => {
  const ref = useRef(null);
  const portal = usePortal(`${name}-root`);
  const wasOpen = usePrevious(isOpen);

  useClickOutside(ref, handleClose);

  useEffect(() => {
    if (isOpen && fromCursor) {
      positionFromCursor(ref.current, placement);
    } else if (isOpen) {
      positionFromViewport(ref.current, placement);
    }
  }, [fromCursor, isOpen, placement, ref]);

  const className = defineClassName(isOpen, wasOpen);

  return (
    <Modal
      {...props}
      className={className}
      portal={portal}
      ref={ref}
    />
  );
};

ModalContainer.defaultProps = {
  fromCursor: false,
  handleClose: () => {},
  isOpen: false,
  name: 'modal',
  placement: {
    horizontal: 'center',
    vertical: 'top',
  },
};

ModalContainer.propTypes = {
  fromCursor: PropTypes.bool,
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  placement: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default ModalContainer;
