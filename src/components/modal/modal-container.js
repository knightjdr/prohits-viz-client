import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import Modal from './modal';
import useClickOutside from '../../hooks/click-outside/use-click-outside';
import usePortal from '../../hooks/portal/use-portal';
import usePrevious from '../../hooks/previous/use-previous';

const ModalContainer = ({
  children,
  handleClose,
  isOpen,
  name,
  position,
}) => {
  const ref = useRef(null);
  useClickOutside(ref, handleClose);
  const portal = usePortal(`${name}-root`);
  const prevIsOpen = usePrevious(isOpen);

  const classes = [`modal_x-${position[0]}`, `modal_y-${position[1]}`];
  if (isOpen && !prevIsOpen) {
    classes.push('open');
  } else if (!isOpen && prevIsOpen) {
    classes.push('close');
  }

  return (
    <Modal
      className={classes.join(' ')}
      footer
      portal={portal}
      ref={ref}
      title="modal title"
    >
      {children}
    </Modal>
  );
};

ModalContainer.defaultProps = {
  children: '',
  isOpen: false,
  name: 'modal',
  position: ['center', 'top'],
};

ModalContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  position: PropTypes.arrayOf(PropTypes.string),
};

export default ModalContainer;
