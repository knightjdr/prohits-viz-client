import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/buttons/link/button';
import Divider from '../../components/divider/divider';
import Input from '../../components/input/file/input-file-container';
import Select from '../../components/select/select-container';

import './file-selection.css';
import Link from '../../components/link/text/link';

const FileSelection = ({
  errors,
  files,
  fileType,
  loadSampleFile,
  selectFile,
  selectFileType,
}) => (
  <div className="analysis__file-selection">
    <Divider>File selection</Divider>
    <p>
      Specifiy the type of file(s) you would like to analyze and select them using
      the input below. See the
      {' '}
      <Link
        href="/help/analysis/input-file"
        visited={false}
      >
        help
      </Link>
      {' '}
      for information on input formats. Alternatively you can load a
      {' '}
      <Button
        onClick={loadSampleFile}
        outline={false}
        type="button"
      >
        sample input file
      </Button>
      .
    </p>
    <div className="analysis__file-selection-inputs">
      <Select
        id="fileType"
        onChange={selectFileType}
        options={[
          { label: 'CRAPome', value: 'crapome' },
          { label: 'SAINT', value: 'saint' },
          { label: 'Generic', value: 'other' },
        ]}
        placeholder="File type..."
        value={fileType}
        warning={errors.fileType}
      />
      <Input
        id="files"
        multiple
        onChange={selectFile}
        value={files}
        warning={errors.files}
      />
    </div>
  </div>
);

FileSelection.defaultProps = {
  fileType: '',
};

FileSelection.propTypes = {
  errors: PropTypes.shape({
    fileType: PropTypes.string,
    files: PropTypes.string,
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  fileType: PropTypes.string,
  loadSampleFile: PropTypes.func.isRequired,
  selectFile: PropTypes.func.isRequired,
  selectFileType: PropTypes.func.isRequired,
};

export default FileSelection;
