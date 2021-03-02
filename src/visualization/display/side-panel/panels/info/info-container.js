import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Info from './info';
import { clearInteractiveState } from '../../../../../state/visualization/data/interactive-file-actions';
import { selectState } from '../../../../../state/selector/general';

const InfoContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const parameters = useSelector((state) => selectState(state, 'parameters'));

  const loadNewFile = () => {
    dispatch(clearInteractiveState());
    history.push('/visualization');
  };

  return (
    <Info
      loadNewFile={loadNewFile}
      parameters={parameters}
    />
  );
};

export default InfoContainer;
