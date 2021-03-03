import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Help from './help';

import useScrollToTop from '../hooks/scroll/use-scroll-to-top';
import { linkOrder } from './links';

const HelpContainer = () => {
  const ref = useRef();
  useScrollToTop(ref);

  const { pathname } = useLocation();
  const footerNavLinks = linkOrder[pathname];

  return (
    <Help
      footerNavLinks={footerNavLinks}
      ref={ref}
    />
  );
};

export default HelpContainer;
