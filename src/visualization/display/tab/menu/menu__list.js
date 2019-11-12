import PropTypes from 'prop-types';
import React from 'react';

import MenuListItem from './menu__list-item';

import './menu__list.css';

const MenuList = ({
  active,
  deleteFirst,
  handleChangeSnapshot,
  handleDeleteSnapshot,
  items,
  title,
}) => (
  items.length > 0
  && (
    <div className="tab__menu-list">
      <h2>{title}</h2>
      <ul>
        { items.map((item, index) => (
          <MenuListItem
            active={active === item}
            handleChangeSnapshot={handleChangeSnapshot}
            handleDeleteSnapshot={handleDeleteSnapshot}
            item={item}
            key={`${title}-${item}`}
            showDelete={index !== 0 || deleteFirst}
          />
        ))}
      </ul>
    </div>
  )
);

MenuList.defaultProps = {
  deleteFirst: true,
};

MenuList.propTypes = {
  active: PropTypes.string.isRequired,
  deleteFirst: PropTypes.bool,
  handleChangeSnapshot: PropTypes.func.isRequired,
  handleDeleteSnapshot: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuList;
