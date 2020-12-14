import React from 'react';
import { useSelector } from 'react-redux';

import Spotlight from './spotlight';
import { selectStateProperty } from '../../state/selector/general';

const SpotlightContainer = () => {
  const manuscripts = useSelector((state) => selectStateProperty(state, 'home', 'spotlight'));

  return (
    <Spotlight manuscripts={manuscripts} />
  );
};

export default SpotlightContainer;
