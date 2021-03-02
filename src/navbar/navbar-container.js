import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Navbar from './navbar';

import defineLinks from './define-links';
import parseURI from './parse-uri';
import useSmallScreen from '../hooks/small-screen/use-small-screen';
import { selectState } from '../state/selector/general';

const NavbarContainer = () => {
  const tasks = useSelector((state) => selectState(state, 'tasks'));

  const { pathname } = useLocation();
  const smallScreen = useSmallScreen(0, 800);

  const links = defineLinks(tasks);
  const route = parseURI(pathname);
  return (
    <Navbar
      links={links}
      route={route}
      smallScreen={smallScreen}
    />
  );
};

export default NavbarContainer;
