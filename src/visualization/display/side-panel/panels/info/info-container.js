import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Info from './info';
import { clearInteractiveState } from '../../../../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../../../../state/selector/general';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
