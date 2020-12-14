import React from 'react';
import { useSelector } from 'react-redux';

import Legend from './legend';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../../state/selector/general';

const LegendContainer = () => {
  const parameters = useSelector((state) => selectState(state, 'parameters'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  return (
    <Legend
      parameters={parameters}
      settings={settings}
    />
  );
};

export default LegendContainer;
