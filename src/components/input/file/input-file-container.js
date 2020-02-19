import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputFile from './input-file';

const InputFileContainer = ({
  onChange,
  value,
  warning,
  ...props
}) => {
  const [inputFiles, setInputFiles] = useState(value);
  const [inputWarning, setInputWarning] = useState(warning);

  const removeFile = (e) => {
    const { name } = e.currentTarget.dataset;
    const index = inputFiles.findIndex(file => file.name === name);
    const updatedFiles = [...inputFiles];
    updatedFiles.splice(index, 1);
    setInputFiles(updatedFiles);
    if (onChange) {
      onChange(e, updatedFiles);
    }
  };

  const handleChange = (e) => {
    const files = Array.from(e.currentTarget.files);
    setInputFiles(files);
    setInputWarning('');
    if (onChange) {
      onChange(e, files);
    }
  };

  const inputID = nanoid();

  useEffect(() => {
    setInputFiles(value);
    setInputWarning('');
  }, [value]);

  useEffect(() => {
    setInputWarning(warning);
  }, [warning]);

  return (
    <InputFile
      files={inputFiles}
      inputID={inputID}
      handleChange={handleChange}
      removeFile={removeFile}
      warning={inputWarning}
      {...props}
    />
  );
};

InputFileContainer.defaultProps = {
  onChange: undefined,
  value: [],
  warning: '',
};

InputFileContainer.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  warning: PropTypes.string,
};

export default InputFileContainer;
