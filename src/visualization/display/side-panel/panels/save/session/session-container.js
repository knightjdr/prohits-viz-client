import React from 'react';
import { useSelector } from 'react-redux';

import Session from './session';

import download from '../../../../../../utils/download';
import useSessionData from './use-session-data';
import { selectStateProperty } from '../../../../../../state/selector/general';

const SessionContainer = () => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  const sessionData = useSessionData();

  const handleSaveToFile = () => {
    const json = JSON.stringify(sessionData());
    download(json, 'session.json');
  };

  return (
    <Session
      handleSaveToFile={handleSaveToFile}
      imageType={imageType}
    />
  );
};

export default SessionContainer;
