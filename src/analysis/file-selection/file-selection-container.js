import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FileSelection from './file-selection';

import parseHeader from './parse-header';
import sampleHeader from './sample-header';
import { selectState } from '../../state/selector/general';
import { setFormField, setFormFields } from '../../state/analysis/form-actions';

const FileSelectionContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const loadSampleFile = async () => {
    const file = new File(
      [sampleHeader],
      'samplefile.txt',
      { type: 'text/plain' },
    );
    dispatch(setFormFields({
      files: [file],
      fileType: 'saint',
      sampleFile: true,
    }));
  };

  const selectFile = (e, selectedFiles) => {
    dispatch(setFormFields({
      files: selectedFiles,
      sampleFile: false,
    }));
  };

  const selectFileType = (e, id, value) => {
    dispatch(setFormField('fileType', value));
  };

  useEffect(() => {
    const getHeader = async () => {
      const header = await parseHeader(form.files[0]);
      dispatch(setFormFields({ header }));
    };

    if (form.fileType && form.files.length > 0) {
      getHeader();
    }
  }, [dispatch, form.files, form.fileType]);

  return (
    <FileSelection
      errors={errors}
      files={form.files}
      fileType={form.fileType}
      loadSampleFile={loadSampleFile}
      selectFile={selectFile}
      selectFileType={selectFileType}
    />
  );
};

FileSelectionContainer.propTypes = {
  errors: PropTypes.shape({
    fileType: PropTypes.string,
    files: PropTypes.string,
  }).isRequired,
};

export default FileSelectionContainer;
