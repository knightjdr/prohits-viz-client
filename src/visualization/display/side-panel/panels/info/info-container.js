import React from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';

import download from '../../../../../utils/download';
import Info from './info';
import { clearInteractiveState } from '../../../../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../../../../state/selector/general';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const parameters = useSelector((state) => selectState(state, 'parameters'));

  const downloadLegend = () => {
    const svg = document.getElementById('legend').outerHTML;
    download(svg, 'legend.svg', 'image/svg+xml');
  };

  const loadNewFile = () => {
    dispatch(clearInteractiveState());
    navigate('/visualization');
  };

  return (
    <Info
      downloadLegend={downloadLegend}
      loadNewFile={loadNewFile}
      parameters={parameters}
    />
  );
};

export default InfoContainer;
