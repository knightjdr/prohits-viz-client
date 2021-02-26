import React from 'react';
import { useSelector } from 'react-redux';

import Markup from './markup__scatter';

import { selectScatterLabels } from '../../../../../../state/selector/visualization/scatter-selector';

const MarkupContainer = () => {
  const { labels } = useSelector((state) => selectScatterLabels(state));

  return (
    <Markup
      labels={labels}
    />
  );
};

export default MarkupContainer;
