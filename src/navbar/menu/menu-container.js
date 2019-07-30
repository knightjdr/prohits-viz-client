import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Menu from './menu';
import useClickOutside from '../../hooks/click-outside/use-click-outside';

const MenuContainer = ({
  links,
  route,
}) => {
  const [open, setState] = useState(false);
  const ref = useRef(null);

  const closeMenu = () => {
    setState(false);
  };

  useClickOutside(ref, closeMenu);

  const toggleMenu = () => {
    setState(!open);
  };
  return (
    <Menu
      links={links}
      open={open}
      ref={ref}
      route={route}
      toggleMenu={toggleMenu}
    />
  );
};

MenuContainer.defaultProps = {
  links: [],
};

MenuContainer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
  route: PropTypes.string.isRequired,
};

export default MenuContainer;
