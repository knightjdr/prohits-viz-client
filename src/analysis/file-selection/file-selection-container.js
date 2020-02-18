import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FileSelection from './file-selection';

import parseHeader from './parse-header';
import sampleHeader from './sample-header';
import { selectState } from '../../state/selector/general';
import { setFormField, setFormFields } from '../../state/analysis/form-actions';


const FileSelectionContainer = () => {
  const dispatch = useDispatch();

  const form = useSelector(state => selectState(state, 'form'));

  const loadSampleFile = async () => {
    const file = new File(
      [sampleHeader],
      'samplefile.txt',
      {
        lastModified: Date.now(),
        type: 'text/plain',
      },
    );
    const header = await parseHeader(file);
    dispatch(setFormFields({
      header,
      files: [file],
      fileType: 'saint',
    }));
  };

  const selectFile = (e, selectedFiles) => {
    dispatch(setFormField('files', selectedFiles));
  };

  const selectFileType = (e, id, value) => {
    dispatch(setFormField('fileType', value));
  };

  return (
    <FileSelection
      files={form.files}
      fileType={form.fileType}
      loadSampleFile={loadSampleFile}
      selectFile={selectFile}
      selectFileType={selectFileType}
    />
  );
};

export default FileSelectionContainer;
