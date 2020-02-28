import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../../components/modal/modal-container';
import ModalFooter from './text-modal-footer';

import './text-modal.css';

const TextModal = ({
  handleClose,
  open,
  selectedFile,
  text,
}) => (
  <Modal
    footer={<ModalFooter handleClose={handleClose} />}
    handleClose={handleClose}
    isOpen={open}
    name="task-modal"
    title={`File: ${selectedFile}`}
  >
    <code className="tasks__modal-text">
      {text}
    </code>
  </Modal>
);

TextModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedFile: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextModal;
