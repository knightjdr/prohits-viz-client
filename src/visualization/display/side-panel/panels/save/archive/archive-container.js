import React from 'react';
import { useSelector } from 'react-redux';

import Archive from './archive';

import { selectStateProperty } from '../../../../../../state/selector/general';

const ArchiveContainer = () => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  const handleArchive = () => {};

  return (
    <Archive
      handleArchive={handleArchive}
      imageType={imageType}
    />
  );
};

export default ArchiveContainer;
