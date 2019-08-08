import React from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';

import download from '../../../../../utils/download';
import Info from './info';
import { clearFile } from '../../../../../state/visualization/file/interactive-file-actions';
import { stateSelector } from '../../../../../state/selector/general';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const parameters = useSelector(state => stateSelector(state, 'parameters'));

  const downloadLegend = () => {
    const svg = document.getElementById('legend').outerHTML;
    download(svg, 'legend.svg', 'image/svg+xml');
  };

  const loadNewFile = () => {
    dispatch(clearFile());
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
