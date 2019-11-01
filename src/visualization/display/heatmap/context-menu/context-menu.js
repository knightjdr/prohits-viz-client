import PropTypes from 'prop-types';
import React from 'react';

import Columns from './columns';
import Modal from '../../../../components/modal/modal-container';

import './context-menu.css';

const ContextMenu = ({
  appendPOI,
  containerType,
  handleClose,
  isOpen,
  name,
  position,
  reference,
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
    name={name}
    padding={false}
    placement={position}
  >
    <ul className="heatmap__context-menu">
      {
        containerType === 'columns'
        && (
          <Columns
            reference={reference}
            setReference={setReference}
            sortAscending={sortAscending}
            sortDescending={sortDescending}
            target={target}
            unsetReference={unsetReference}
          />
        )
      }
      <li>
        <button
          onClick={appendPOI}
          type="button"
        >
          Select
          {' '}
          {containerType === 'columns' ? 'column' : 'row'}
        </button>
      </li>
    </ul>
  </Modal>
);

ContextMenu.defaultProps = {
  reference: '',
};

ContextMenu.propTypes = {
  appendPOI: PropTypes.func.isRequired,
  containerType: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  reference: PropTypes.string,
  setReference: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  sortDescending: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  unsetReference: PropTypes.func.isRequired,
};

export default ContextMenu;
