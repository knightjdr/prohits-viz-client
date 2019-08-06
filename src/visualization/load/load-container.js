import React, { useState } from 'react';

import Load from './load';
import readFile from '../../utils/read-file';
import validate from './validate';

const LoadContainer = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = async (e) => {
    setLoading(true);
    try {
      const stringifiedFile = await readFile(e.currentTarget.files[0]);
      const fileData = validate(stringifiedFile);
      if (fileData.err) {
        setError(true);
        setErrorMessage(fileData.message);
      }
    } catch (err) {
      setError(true);
      setErrorMessage(err.toString());
    }
    setLoading(false);
  };

  return (
    <Load
      error={error}
      errorMessage={errorMessage}
      handleChange={handleChange}
      isLoading={isLoading}
    />
  );
};


export default LoadContainer;
