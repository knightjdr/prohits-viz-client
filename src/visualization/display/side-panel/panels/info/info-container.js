import React from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';

import Info from './info';
import { clearInteractiveState } from '../../../../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../../../../state/selector/general';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const parameters = useSelector((state) => selectState(state, 'parameters'));

  const loadNewFile = () => {
    dispatch(clearInteractiveState());
    navigate('/visualization');
  };

  return (
    <Info
      loadNewFile={loadNewFile}
      parameters={parameters}
    />
  );
};

export default InfoContainer;
