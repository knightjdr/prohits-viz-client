import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import PoiAction from './poi-action';

import { filterAndSortPoints } from '../../../../../../../../state/visualization/circheatmap/readouts-actions';
import { selectDataProperty } from '../../../../../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';
import { updateSetting } from '../../../../../../../../state/visualization/settings/settings-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();

  const poiReadouts = useSelector((state) => selectDataProperty(state, 'poi', 'readouts'));

  const handleApply = () => {
    const newOrder = Array.from(Array(poiReadouts.length)).map((c, index) => index);
    batch(() => {
      dispatch(updateSetting('readoutOrder', newOrder));
      dispatch(filterAndSortPoints({ readoutOrder: poiReadouts }));
    });
  };

  const handleClear = () => {
    batch(() => {
      dispatch(updateSetting('readoutOrder', []));
      dispatch(updatePOI({ readouts: [] }));
      dispatch(filterAndSortPoints({ readoutOrder: [] }));
    });
  };

  return (
    <PoiAction
      handleApply={handleApply}
      handleClear={handleClear}
    />
  );
};

export default PoiActionContainer;
