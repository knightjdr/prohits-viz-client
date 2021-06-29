import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../components/divider/divider';
import InputFile from '../components/input/file/input-file-container';

const UtilitiesFile = ({
  error,
  handleInputFile,
}) => (
  <div className="utilities__file">
    <Divider>File</Divider>
    <p>
      Select a file to process. Depending on the utility, this could be a file from ProHits-viz
      or a tabular input file.
    </p>
    <InputFile
      id="file_input_utilities"
      onChange={handleInputFile}
      warning={error}
    />
  </div>
);

UtilitiesFile.defaultProps = {
  error: '',
};

UtilitiesFile.propTypes = {
  error: PropTypes.string,
  handleInputFile: PropTypes.func.isRequired,
};

export default UtilitiesFile;
