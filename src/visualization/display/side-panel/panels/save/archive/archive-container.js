import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Archive from './archive';

import copyToClipboard from '../../../../../../utils/copy-to-clipboard';
import defineHelpLink from '../define-help-link';
import useFetch from '../../../../../../hooks/fetch/use-fetch';
import useSessionData from '../session/use-session-data';
import { selectStateProperty } from '../../../../../../state/selector/general';

const ArchiveContainer = () => {
  const history = useHistory();
  const [archiveStatus, setArchiveStatus] = useState({
    archiving: false,
    error: false,
    message: '',
    route: '',
  });
  const [isArchiveModelOpen, setIsArchiveModelOpen] = useState(false);

  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  const fetch = useFetch();
  const sessionData = useSessionData();

  const handleArchive = async () => {
    setArchiveStatus({
      archiving: true,
      error: false,
      message: 'archiving...',
      route: '',
    });

    const options = {
      data: sessionData(),
      method: 'POST',
    };

    const response = await fetch('/archive/', options);
    if (response?.data?.route) {
      setArchiveStatus({
        archiving: false,
        error: false,
        message: '',
        route: response.data.route,
      });
      setIsArchiveModelOpen(true);
    } else {
      setArchiveStatus({
        archiving: false,
        error: true,
        message: 'There was an error archiving the session. Please save your session to a file and try again later.',
        route: '',
      });
    }
  };

  const handleClose = () => {
    setIsArchiveModelOpen(false);
    history.replace(archiveStatus.route);
  };

  const handleCopy = () => {
    copyToClipboard(`${process.env.REACT_APP_WS_HOST}${archiveStatus.route}`);
  };

  const helpLink = defineHelpLink(imageType, 'save-archive');

  return (
    <Archive
      archiving={archiveStatus.archiving}
      error={archiveStatus.error}
      handleArchive={handleArchive}
      handleClose={handleClose}
      handleCopy={handleCopy}
      helpLink={helpLink}
      isArchiveModelOpen={isArchiveModelOpen}
      message={archiveStatus.message}
      route={archiveStatus.route}
    />
  );
};

export default ArchiveContainer;
