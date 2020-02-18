import React from 'react';

import Session from './session';

import download from '../../../../../../utils/download';
import useSessionData from './use-session-data';

const SessionContainer = () => {
  const sessionData = useSessionData();

  const handleSaveToFile = () => {
    const json = JSON.stringify(sessionData());
    download(json, 'session.json');
  };

  return (
    <Session handleSaveToFile={handleSaveToFile} />
  );
};

export default SessionContainer;
