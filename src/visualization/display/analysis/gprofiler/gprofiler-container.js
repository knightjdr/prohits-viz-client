import PropTypes from 'prop-types';
import React from 'react';
import Gprofiler from './gprofiler';

import useAnnotation from '../../side-panel/panels/markup/annotations/use-annotation';

const GprofilerContainer = ({
  analysisID,
  data,
}) => {
  const addAnnotation = useAnnotation();

  const handleAddAnnotation = (e, inputID, value) => {
    addAnnotation(value);
  };

  const handleExportCSV = () => {};

  return (
    <Gprofiler
      data={data}
      handleAddAnnotation={handleAddAnnotation}
      handleExportCSV={handleExportCSV}
    />
  );
};

GprofilerContainer.propTypes = {
  analysisID: PropTypes.string.isRequired,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
  }).isRequired,
};

export default GprofilerContainer;
