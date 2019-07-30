import React from 'react';
import { usePath } from 'hookrouter';

import Navbar from './navbar';
import parseURI from './parse-uri';
import useSmallScreen from '../hooks/small-screen/use-small-screen';

const NavbarContainer = () => {
  const path = usePath();
  const smallScreen = useSmallScreen(0, 800);

  const route = parseURI(path);
  return (
    <Navbar
      route={route}
      smallScreen={smallScreen}
    />
  );
};

export default NavbarContainer;
