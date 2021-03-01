import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import PoiAction from './poi-action';

import { filterAndSortReadouts } from '../../../../../../../../state/visualization/circheatmap/readouts-actions';
import { selectCircHeatmapLabels } from '../../../../../../../../state/selector/visualization/circheatmap-selector';
import { selectDataProperty } from '../../../../../../../../state/selector/visualization/data-selector';
import { updatePOI } from '../../../../../../../../state/visualization/analysis/poi-actions';
import { updateSetting } from '../../../../../../../../state/visualization/settings/settings-actions';

const PoiActionContainer = () => {
  const dispatch = useDispatch();

  const poiReadouts = useSelector((state) => selectDataProperty(state, 'poi', 'readouts'));
  const { labels } = useSelector((state) => selectCircHeatmapLabels(state));

  const handleApply = () => {
    const readoutIDs = poiReadouts.map((index) => labels[index]);
    batch(() => {
      dispatch(updatePOI({ readouts: [] }));
      dispatch(updateSetting('readoutIDs', readoutIDs));
      dispatch(filterAndSortReadouts({ readoutIDs }));
    });
  };

  const handleClear = () => {
    batch(() => {
      dispatch(updatePOI({ readouts: [] }));
      dispatch(updateSetting('readoutIDs', {}));
      dispatch(filterAndSortReadouts({ readoutOrder: [] }));
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
