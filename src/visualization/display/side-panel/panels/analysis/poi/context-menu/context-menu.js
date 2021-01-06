import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../../../../../../../components/modal/modal-container';

import './context-menu.css';

const ContextMenu = ({
  canPaste,
  handleClose,
  handleCopy,
  handleCopyHighlighted,
  handlePasteInputOpen,
  isOpen,
  placement,
}) => (
  <Modal
    background={false}
    fromCursor
    handleClose={handleClose}
    isOpen={isOpen}
    name="poi-context-menu"
    padding={false}
    placement={placement}
  >
    <ul className="heatmap__poi-context-menu">
      <li>
        <button
          onClick={handleCopyHighlighted}
          type="button"
        >
          Copy highlighted
        </button>
      </li>
      <li>
        <button
          onClick={handleCopy}
          type="button"
        >
          Copy all
        </button>
      </li>
      {
        canPaste
        && (
          <li>
            <button
              onClick={handlePasteInputOpen}
              type="button"
            >
              Paste
            </button>
          </li>
        )
      }
    </ul>
  </Modal>
);

ContextMenu.propTypes = {
  canPaste: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  handleCopyHighlighted: PropTypes.func.isRequired,
  handlePasteInputOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  placement: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default ContextMenu;
