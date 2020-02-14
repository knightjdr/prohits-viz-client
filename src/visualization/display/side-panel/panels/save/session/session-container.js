import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Session from './session';

import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../../../state/selector/general';
import { setSessionName } from '../../../../../../state/visualization/export/save-actions';

const SessionContainer = () => {
  const dispatch = useDispatch();

  const { imageType } = useSelector(state => selectDataProperty(state, 'settings', 'current'));
  const sessionName = useSelector(state => selectStateProperty(state, 'save', 'name'));

  const handleChangeSessionName = (e, id, value) => {
    if (value !== sessionName) {
      dispatch(setSessionName(value));
    }
  };

  const handleSaveToBrowser = () => {};

  const handleSaveToFile = () => {
    console.log(imageType);
  };

  return (
    <Session
      handleChangeSessionName={handleChangeSessionName}
      handleSaveToBrowser={handleSaveToBrowser}
      handleSaveToFile={handleSaveToFile}
      sessionName={sessionName}
    />
  );
};

export default SessionContainer;
