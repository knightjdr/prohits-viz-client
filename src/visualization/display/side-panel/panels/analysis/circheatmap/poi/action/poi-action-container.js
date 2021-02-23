import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PoiAction from './poi-action';

import { selectDataProperty } from '../../../../../../../../state/selector/visualization/data-selector';
import { updateSetting } from '../../../../../../../../state/visualization/settings/settings-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();

  const poiReadouts = useSelector((state) => selectDataProperty(state, 'poi', 'readouts'));

  const handleApply = () => {
    dispatch(updateSetting('readoutOrder', poiReadouts));
  };

  return (
    <PoiAction
      handleApply={handleApply}
    />
  );
};

export default PoiActionContainer;
