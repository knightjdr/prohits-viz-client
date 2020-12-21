import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tooltips from './tooltips';

import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../../../../state/visualization/settings/display-actions';

const TooltipsContainer = () => {
  const dispatch = useDispatch();
  const showTooltips = useSelector((state) => selectDataProperty(state, 'display', 'showTooltips'));

  const handleToggleTooltips = () => {
    dispatch(updateDisplaySetting('showTooltips', !showTooltips));
  };

  return (
    <Tooltips
      handleToggleTooltips={handleToggleTooltips}
      show={showTooltips}
    />
  );
};

export default TooltipsContainer;
