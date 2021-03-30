import React from 'react';
import { useSelector } from 'react-redux';

import RSQ from './rsq';

import { selectStateProperty } from '../../../../../../state/selector/general';

const RSQContainer = () => {
  const rsq = useSelector((state) => selectStateProperty(state, 'analysis', 'rsq'));

  return (
    <RSQ rsq={rsq} />
  );
};

export default RSQContainer;
