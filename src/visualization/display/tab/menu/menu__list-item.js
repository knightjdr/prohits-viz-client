import PropTypes from 'prop-types';
import React from 'react';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import IconButton from '../../../../components/buttons/icon/button';

const MenuListItem = ({
  active,
  handleChangeSnapshot,
  handleDeleteSnapshot,
  item,
  showDelete,
}) => (
  <li>
    <button
      className={active ? 'menu-list__button active' : 'menu-list__button inactive'}
      data-snapshot={item}
      onClick={handleChangeSnapshot}
      type="button"
    >
      {item}
    </button>
    {
      showDelete
      && (
        <IconButton
          className="menu-list__button-delete"
          data-snapshot={item}
          icon={faTimes}
          kind="warning"
          onClick={handleDeleteSnapshot}
          square
          type="button"
        />
      )
    }
  </li>
);

MenuListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  handleChangeSnapshot: PropTypes.func.isRequired,
  handleDeleteSnapshot: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  showDelete: PropTypes.bool.isRequired,
};

export default MenuListItem;
