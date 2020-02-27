import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputFile from './input-file';

const InputFileContainer = ({
  id,
  onChange,
  value,
  warning,
  ...props
}) => {
  const [inputID] = useState(id || `id-${nanoid()}`);
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
  id: '',
  onChange: undefined,
  value: [],
  warning: '',
};

InputFileContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  warning: PropTypes.string,
};

export default InputFileContainer;
