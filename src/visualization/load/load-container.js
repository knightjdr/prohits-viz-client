import React from 'react';
import { navigate } from 'hookrouter';
import { useDispatch } from 'react-redux';

import fillDefaults from '../defaults/fill';
import Load from './load';
import readFile from '../../utils/read-file';
import removeFileExtenstion from '../../utils/remove-file-ext';
import useLoading from '../../hooks/loading/use-loading';
import validate from './validate';
import { parseFile } from '../../state/visualization/file/interactive-file-actions';

const LoadContainer = () => {
  const dispatch = useDispatch();
  const status = useLoading();

  const handleChange = async (e) => {
    const file = e.currentTarget.files[0];
    status.setLoading(true);
    try {
      const fileContent = await readFile(file);
      const fileData = validate(fileContent);
      if (fileData.err) {
        status.setError(true);
        status.setErrorMessage(fileData.message);
        status.setLoading(false);
      } else {
        const filename = removeFileExtenstion(file.name);
        const data = fillDefaults(fileData.json, filename, 'userfile');
        dispatch(parseFile(data));
        navigate(`/visualization/userfile/${filename}`);
      }
    } catch (err) {
      status.setError(true);
      status.setErrorMessage(err.toString());
      status.setLoading(false);
    }
  };

  return (
    <Load
      error={status.error}
      errorMessage={status.errorMessage}
      handleChange={handleChange}
      isLoading={status.isLoading}
    />
  );
};


export default LoadContainer;
