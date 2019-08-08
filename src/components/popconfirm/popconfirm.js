import PropTypes from 'prop-types';
import React, { cloneElement, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../buttons/rectangular/button';
import Modal from '../modal/modal-container';
import StyledPopconfirm, { ConfirmWrapper } from './popconfirm-style';

const Popconfirm = forwardRef((
  {
    children,
    handleClick,
    handleClose,
    handleConfirm,
    handleKeyPress,
    open,
    position,
    title,
  },
  ref,
) => (
  <ConfirmWrapper
    onClick={handleClick}
    onKeyPress={handleKeyPress}
    role="button"
    tabIndex={-1}
  >
    {cloneElement(children, { ref })}
    <Modal
      background={false}
      fromCursor
      handleClose={handleClose}
      isOpen={open}
      name="popconfirm"
      placement={position}
    >
      <StyledPopconfirm>
        <h1>
          <FontAwesomeIcon icon={faExclamationCircle} />
          {title}
        </h1>
        <div className="popconfirm__buttons">
          <Button
            onClick={handleClose}
            kind="grey"
            type="button"
          >
            No
          </Button>
          <Button
            onClick={handleConfirm}
            kind="success"
            type="button"
          >
            Yes
          </Button>
        </div>
      </StyledPopconfirm>
    </Modal>
  </ConfirmWrapper>
));

Popconfirm.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Popconfirm;
