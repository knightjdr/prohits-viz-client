import React from 'react';
import { useSelector } from 'react-redux';

import Markup from './markup__circheatmap';

import { selectCircHeatmapLabels } from '../../../../../../state/selector/visualization/circheatmap-selector';

const MarkupContainer = () => {
  const { labels } = useSelector((state) => selectCircHeatmapLabels(state));

  return (
    <Markup
      labels={labels}
    />
  );
};

export default MarkupContainer;
