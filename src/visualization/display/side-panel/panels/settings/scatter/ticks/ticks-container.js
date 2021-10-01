import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Ticks from './ticks';

import filterTicks from './filter-ticks';
import { defaultState as defaultDisplayState } from '../../../../../../defaults/scatter/display';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { updateSetting } from '../../../../../../../state/visualization/settings/settings-actions';
import { resetScatterTransformations } from '../../../../../../../state/visualization/settings/display-actions';

const TicksContainer = () => {
  const dispatch = useDispatch();

  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const {
    xTicks,
    yTicks,
  } = settings;

  const handleTickChange = (e, name, value) => {
    batch(() => {
      dispatch(updateSetting(name, filterTicks(name, value, settings)));
      dispatch(resetScatterTransformations({
        transform: defaultDisplayState.transform,
      }));
    });
  };

  return (
    <Ticks
      handleTickChange={handleTickChange}
      xTicks={xTicks}
      yTicks={yTicks}
    />
  );
};

export default TicksContainer;
