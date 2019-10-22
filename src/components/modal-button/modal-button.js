import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Modal from '../modal/modal-container';
import StyledModalButton, { ModalButtonWrapper } from './modal-button-style';

const ModalButton = forwardRef((
  {
    button,
    children,
    handleClick,
    handleClose,
    handleKeyPress,
    name,
    open,
    position,
  },
  ref,
) => (
  <ModalButtonWrapper>
    <span
      className="modal-button__button"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      ref={ref}
      role="button"
      tabIndex={-1}
    >
      {button}
    </span>
    <Modal
      background={false}
      fromCursor
      handleClose={handleClose}
      isOpen={open}
      name={name}
      padding={false}
      placement={position}
    >
      <StyledModalButton>
        {children}
      </StyledModalButton>
    </Modal>
  </ModalButtonWrapper>
));

ModalButton.propTypes = {
  button: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default ModalButton;
