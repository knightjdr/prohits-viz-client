import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../../../../../components/modal/modal-container';

import './context-menu.css';

const ContextMenu = ({
  handleClose,
  isOpen,
  position,
  reference,
  setSelection,
  setReference,
  sortAscending,
  sortDescending,
  target,
  unsetReference,
}) => (
  <Modal
    background={false}
    fromCursor
    handleClose={handleClose}
    isOpen={isOpen}
    name="context-menu"
    padding={false}
    placement={position}
  >
    <ul className="heatmap__context-menu">
      <li>
        <button
          onClick={sortAscending}
          type="button"
        >
          Sort ascending
        </button>
      </li>
      <li>
        <button
          onClick={sortDescending}
          type="button"
        >
          Sort descending
        </button>
      </li>
      {
        reference !== target
          ? (
            <li>
              <button
                onClick={setReference}
                type="button"
              >
                Set as reference
              </button>
            </li>
          )
          : (
            <li>
              <button
                onClick={unsetReference}
                type="button"
              >
                Unset as reference
              </button>
            </li>
          )
      }
      <li>
        <button
          onClick={setSelection}
          type="button"
        >
          Select column
        </button>
      </li>
    </ul>
  </Modal>
);

ContextMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  reference: PropTypes.string.isRequired,
  setReference: PropTypes.func.isRequired,
  setSelection: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  sortDescending: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  unsetReference: PropTypes.func.isRequired,
};

export default ContextMenu;
