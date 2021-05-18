import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';

import Footer from './paste-input-footer';
import Modal from '../../../../../../../components/modal/modal-container';
import TextArea from '../../../../../../../components/input/text-area/input-text-area-container';

import './paste-input.css';

const PasteInput = ({
  handleAppend,
  handleChange,
  handleClose,
  handleReplace,
  isOpen,
  pasteText,
}) => (
  <Modal
    footer={(
      <Footer
        handleAppend={handleAppend}
        handleClose={handleClose}
        handleReplace={handleReplace}
      />
    )}
    handleClose={handleClose}
    isOpen={isOpen}
    name="poi-paste-input"
    title="Paste list"
  >
    <div className="selection__paste-input">
      <p>
        <FontAwesomeIcon icon={faInfoCircle} />
        Names can be pasted as a comma-, space- or newline-separated list.
      </p>
      <TextArea
        onChange={handleChange}
        rows={8}
        value={pasteText}
      />
    </div>
  </Modal>
);

PasteInput.propTypes = {
  handleAppend: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleReplace: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  pasteText: PropTypes.string.isRequired,
};

export default PasteInput;
