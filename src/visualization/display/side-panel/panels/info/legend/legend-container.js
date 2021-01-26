import React from 'react';
import { useSelector } from 'react-redux';

import Legend from './legend';

import download from '../../../../../../utils/download';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../../../state/selector/general';

const LegendContainer = () => {
  const circles = useSelector((state) => selectDataProperty(state, 'circles', 'order'));
  const customizations = useSelector((state) => selectDataProperty(state, 'customization', 'points'));
  const legend = useSelector((state) => selectState(state, 'legend'));
  const parameters = useSelector((state) => selectState(state, 'parameters'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const downloadLegend = () => {
    const svg = document.getElementById('legend').outerHTML;
    download(svg, 'legend.svg', 'image/svg+xml');
  };

  return (
    <Legend
      customizations={customizations}
      downloadLegend={downloadLegend}
      legend={legend.length > 0 ? legend : circles}
      parameters={parameters}
      settings={settings}
    />
  );
};

export default LegendContainer;
