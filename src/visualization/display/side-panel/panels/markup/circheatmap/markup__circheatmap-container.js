import React from 'react';
import { useSelector } from 'react-redux';

import Markup from './markup__circheatmap';

import { selectPlotLabels } from '../../../../../../state/selector/visualization/plot-selector';

const MarkupContainer = () => {
  const { labels } = useSelector((state) => selectPlotLabels(state));

  return (
    <Markup
      labels={labels}
    />
  );
};

export default MarkupContainer;
