import PropTypes from 'prop-types';
import React from 'react';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../../../../components/buttons/icon/button';

import './list-swap.css';

const ListSwap = ({
  handleSwap,
  type,
}) => (
  <div className="poi__button-group">
    <IconButton
      data-swap-source="unselected"
      data-swap-type={type}
      kind="secondary"
      icon={faArrowRight}
      onClick={handleSwap}
      type="button"
    />
    <IconButton
      data-swap-source="selected"
      data-swap-type={type}
      kind="secondary"
      icon={faArrowRight}
      onClick={handleSwap}
      rotation={180}
      type="button"
    />
  </div>
);

ListSwap.propTypes = {
  handleSwap: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListSwap;
