import React from 'react';
import { useLocation } from 'react-router-dom';

import Help from './help';
import { linkOrder } from './links';

const HelpContainer = () => {
  const { pathname } = useLocation();
  const footerNavLinks = linkOrder[pathname];

  return (
    <Help footerNavLinks={footerNavLinks} />
  );
};

export default HelpContainer;
