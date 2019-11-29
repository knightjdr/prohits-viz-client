import React from 'react';

import Session from './session';

const SessionContainer = () => {
  const handleChangeSessionName = () => {};

  const handleSaveToBrowser = () => {};

  const handleSaveToFile = () => {};

  return (
    <Session
      handleChangeSessionName={handleChangeSessionName}
      handleSaveToBrowser={handleSaveToBrowser}
      handleSaveToFile={handleSaveToFile}
      sessionName=""
    />
  );
};

export default SessionContainer;
