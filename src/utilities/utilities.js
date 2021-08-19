import PropTypes from 'prop-types';
import React from 'react';

import File from './utilities-file';
import LoadUtility from './load-utility';
import Select from './utility-select';
import Submit from './utilities-submit';
import UtilityModal from './utility-modal/utility-modal-container';

import './utilities.css';

const Utilities = ({
  files,
  errors,
  handleInputFile,
  handleModalClose,
  handleSubmit,
  handleUtilityType,
  taskID,
  uploadProgress,
  utility,
}) => (
  <div className="utilities">
    <div className="utilities__inner">
      <h1>Utilities</h1>
      <p>
        Here you can find additional utilities for working with files from ProHits-viz and various tools for
        supplemental analysis.
      </p>
      <p>
        Many of the scripts supporting these utilities were generated by us for previous research projects. Most involve
        extracting and processing data from protein-protein interaction files (typically SAINT). These utilities may
        output tabular data files or static images. While these utilities do no warrant full interactive support, such
        as the other tools at ProHits-viz, we provide access to them here as they may be of use to others.
      </p>
      <p>
        <strong>
          The page is a work in progress, and more utilities will be added in the near future.
        </strong>
      </p>
      <File
        error={errors.file}
        file={files}
        handleInputFile={handleInputFile}
      />
      <Select
        handleUtilityType={handleUtilityType}
        utility={utility}
      />
      <LoadUtility
        errors={errors}
        utility={utility}
      />
      <Submit
        files={files}
        handleSubmit={handleSubmit}
        uploadProgress={uploadProgress}
        utility={utility}
      />
      <UtilityModal
        handleClose={handleModalClose}
        taskID={taskID}
      />
    </div>
  </div>
);

Utilities.defaultProps = {
  files: [],
  uploadProgress: 0,
  utility: '',
};

Utilities.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})),
  errors: PropTypes.shape({
    file: PropTypes.string,
  }).isRequired,
  handleInputFile: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleUtilityType: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
  uploadProgress: PropTypes.number,
  utility: PropTypes.string,
};

export default Utilities;
