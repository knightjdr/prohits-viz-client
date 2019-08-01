import React, { useState } from 'react';
import { usePath } from 'hookrouter';

import Menu from './menu';
import useSmallScreen from '../../hooks/small-screen/use-small-screen';

const MenuContainer = () => {
  const smallScreen = useSmallScreen(0);
  const [isOpen, setOpen] = useState(!smallScreen);

  const route = usePath();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu
      isOpen={isOpen}
      route={route}
      toggleMenu={toggleMenu}
    />
  );
};

export default MenuContainer;
