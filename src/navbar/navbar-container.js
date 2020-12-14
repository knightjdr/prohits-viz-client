import React from 'react';
import { usePath } from 'hookrouter';
import { useSelector } from 'react-redux';

import Navbar from './navbar';

import defineLinks from './define-links';
import parseURI from './parse-uri';
import useSmallScreen from '../hooks/small-screen/use-small-screen';
import { selectState } from '../state/selector/general';

const NavbarContainer = () => {
  const tasks = useSelector((state) => selectState(state, 'tasks'));

  const path = usePath();
  const smallScreen = useSmallScreen(0, 800);

  const links = defineLinks(tasks);
  const route = parseURI(path);
  return (
    <Navbar
      links={links}
      route={route}
      smallScreen={smallScreen}
    />
  );
};

export default NavbarContainer;
