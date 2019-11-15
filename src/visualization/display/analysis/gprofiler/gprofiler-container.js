import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Gprofiler from './gprofiler';

import columnDefinitions from './column-definitions';

import convertToCsv from '../../../../utils/convert-to-csv';
import download from '../../../../utils/download';
import formatRows from './format/format-rows';
import useAnnotation from '../../side-panel/panels/markup/annotations/use-annotation';

const GprofilerContainer = ({
  analysisID,
  data,
}) => {
  const addAnnotation = useAnnotation();

  const tableRows = useMemo(
    () => formatRows(data.results),
    [data.results],
  );

  const handleAddAnnotation = (e, inputID, value) => {
    addAnnotation(value);
  };

  const handleExportCSV = () => {
    const header = columnDefinitions.header.map(column => column.name);
    const csv = convertToCsv(header, columnDefinitions.order, data.results, '\t');
    download(csv, `${analysisID}.txt`);
  };

  return (
    <Gprofiler
      data={data}
      handleAddAnnotation={handleAddAnnotation}
      handleExportCSV={handleExportCSV}
      tableRows={tableRows}
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
