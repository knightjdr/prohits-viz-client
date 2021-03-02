import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from './menu';
import useSmallScreen from '../../hooks/small-screen/use-small-screen';

const MenuContainer = () => {
  const smallScreen = useSmallScreen(0);
  const [isOpen, setOpen] = useState(!smallScreen);

  const { pathname } = useLocation();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu
      isOpen={isOpen}
      route={pathname}
      toggleMenu={toggleMenu}
    />
  );
};

export default MenuContainer;
