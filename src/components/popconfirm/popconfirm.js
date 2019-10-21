import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../buttons/rectangular/button';
import ModalButton from '../modal-button/modal-button-container';
import StyledPopconfirm from './popconfirm-style';

const Popconfirm = ({
  button,
  onConfirm,
  placement,
  title,
}) => (
  <ModalButton
    button={button}
    name="pop-confirm"
    placement={placement}
  >
    <StyledPopconfirm>
      <h1>
        <FontAwesomeIcon icon={faExclamationCircle} />
        {title}
      </h1>
      <div className="popconfirm__buttons">
        <Button
          onClick={onConfirm}
          kind="success"
          type="button"
        >
          Yes
        </Button>
      </div>
    </StyledPopconfirm>
  </ModalButton>
);

Popconfirm.defaultProps = {
  placement: ['center', 'bottom'],
};

Popconfirm.propTypes = {
  button: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  placement: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Popconfirm;
