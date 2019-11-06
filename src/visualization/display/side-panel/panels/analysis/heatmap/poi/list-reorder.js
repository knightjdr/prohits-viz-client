import PropTypes from 'prop-types';
import React from 'react';
import { faArrowUp } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../../../components/buttons/icon/button';

import './list-swap.css';

const ListReorder = ({
  handleReorder,
  type,
}) => (
  <div className="poi__button-group">
    <IconButton
      data-reorder-direction="up"
      data-reorder-type={type}
      kind="secondary"
      icon={faArrowUp}
      onClick={handleReorder}
      type="button"
    />
    <IconButton
      data-reorder-direction="down"
      data-reorder-type={type}
      kind="secondary"
      icon={faArrowUp}
      onClick={handleReorder}
      rotation={180}
      type="button"
    />
  </div>
);

ListReorder.propTypes = {
  handleReorder: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListReorder;
