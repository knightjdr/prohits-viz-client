import PropTypes from 'prop-types';
import React, { useState } from 'react';

import FileSelector from './file-selector';

const FileSelectorContainer = ({
  download,
  task,
  viewImage,
}) => {
  const [downloading, setDownloadingStatus] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const downloadFile = async (e) => {
    setDownloadingStatus(true);
    await download(e);
    setDownloadingStatus(false);
  };

  const handleChange = (e, id, value) => {
    setSelectedFile(value);
  };

  const view = (e) => {
    const { primaryfile } = e.currentTarget.dataset;
    const file = selectedFile || primaryfile;
    viewImage(e, file);
  };

  return (
    <FileSelector
      download={downloadFile}
      downloading={downloading}
      handleChange={handleChange}
      task={task}
      view={view}
    />
  );
};

FileSelectorContainer.propTypes = {
  download: PropTypes.func.isRequired,
  task: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    primaryFile: PropTypes.string,
    tool: PropTypes.string,
  }).isRequired,
  viewImage: PropTypes.func.isRequired,
};

export default FileSelectorContainer;
