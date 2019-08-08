import React from 'react';
import { useSelector } from 'react-redux';

import Legend from './legend';
import { stateSelector, stateSelectorProp } from '../../../../../../state/selector/general';

const LegendContainer = () => {
  const parameters = useSelector(state => stateSelector(state, 'parameters'));
  const segments = useSelector(state => stateSelectorProp(state, 'plot', 'segments'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));

  return (
    <Legend
      parameters={parameters}
      segments={segments}
      settings={settings}
    />
  );
};

export default LegendContainer;
