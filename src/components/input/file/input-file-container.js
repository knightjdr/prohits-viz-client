import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputFile from './input-file';

const InputFileContainer = ({
  onChange,
  ...props
}) => {
  const [inputFiles, setInputFiles] = useState([]);

  const removeFile = (e) => {
    const { name } = e.currentTarget.dataset;
    const index = inputFiles.findIndex(file => file.name === name);
    const updatedFiles = [...inputFiles];
    updatedFiles.splice(index, 1);
    setInputFiles(updatedFiles);
  };

  const handleChange = (e) => {
    const files = Array.from(e.currentTarget.files);
    setInputFiles(files);
    if (onChange) {
      onChange(e);
    }
  };

  const inputID = nanoid();

  return (
    <InputFile
      files={inputFiles}
      inputID={inputID}
      handleChange={handleChange}
      removeFile={removeFile}
      {...props}
    />
  );
};

InputFileContainer.defaultProps = {
  onChange: undefined,
};

InputFileContainer.propTypes = {
  onChange: PropTypes.func,
};

export default InputFileContainer;
