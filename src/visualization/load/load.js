import PropTypes from 'prop-types';
import React from 'react';

import InputFile from '../../components/input/file/input-file-container';
import Link from '../../components/link/text/link';
import Loading from '../../components/loading/element/loading';

import './load.css';

const loadingMessage = (error, errorMessage, isLoading) => {
  if (error && errorMessage === 'Error: Invalid file format') {
    return (
      <span>
        Invalid file format. If you have a .tsv file from version 1 of ProHits-viz,
        please convert it to the new .json format on the
        {' '}
        <Link to="/utilities">
          utilities
        </Link>
        {' '}
        page.
      </span>
    );
  } if (error) {
    return errorMessage;
  } if (isLoading) {
    return 'loading file...';
  }
  return '';
};

const Load = ({
  error,
  errorMessage,
  handleChange,
  isLoading,
}) => (
  <div className="visualization__load">
    <InputFile
      id="file_input"
      onChange={handleChange}
    />
    <Loading
      className="visualization__loading-status"
      error={error}
      isLoading={isLoading}
      message={loadingMessage(error, errorMessage, isLoading)}
    />
    <p>
      Select the interactive image to display. This file must be JSON format (extension .json).
      If you have downloaded an analysis results folder from ProHits-viz, these files will be
      located in the &quot;interactive&quot; subfolder. See the
      {' '}
      <Link
        to="/help/visualization/input-file"
        outline={false}
        visited={false}
      >
        help
      </Link>
      {' '}
      for information on the input format. You can also test a sample
      {' '}
      <Link
        to="/visualization/samplefile/dotplot"
        outline={false}
        visited={false}
      >
        dot plot
      </Link>
      , sample
      {' '}
      <Link
        to="/visualization/samplefile/specificity"
        outline={false}
        visited={false}
      >
        scatter plot
      </Link>
      {' '}
      or a sample
      {' '}
      <Link
        to="/visualization/samplefile/circheatmap"
        outline={false}
        visited={false}
      >
        circular heatmap
      </Link>
      .
    </p>
  </div>
);

Load.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Load;
