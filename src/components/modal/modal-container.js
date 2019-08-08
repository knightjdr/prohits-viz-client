import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import Modal from './modal';
import transformPosition from './position';
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
  useClickOutside(ref, handleClose);
  const portal = usePortal(`${name}-root`);
  const prevIsOpen = usePrevious(isOpen);

  const classes = [];
  let transform = {};
  if (fromCursor) {
    classes.push(...['modal_from-cursor']);
    transform = transformPosition(placement);
  } else {
    classes.push(...['modal_from-viewport', `modal_x-${placement.horizontal}`, `modal_y-${placement.vertical}`]);
  }

  if (isOpen && !prevIsOpen) {
    classes.push('open');
  } else if (!isOpen && prevIsOpen) {
    classes.push('close');
  }

  return (
    <Modal
      {...props}
      className={classes.join(' ')}
      portal={portal}
      ref={ref}
      transform={transform}
    />
  );
};

ModalContainer.defaultProps = {
  fromCursor: false,
  isOpen: false,
  name: 'modal',
  placement: {
    horizontal: 'center',
    vertical: 'bottom',
  },
};

ModalContainer.propTypes = {
  fromCursor: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
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
