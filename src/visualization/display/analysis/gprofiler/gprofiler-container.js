import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Gprofiler from './gprofiler';

import convertToCsv from '../../../../utils/convert-to-csv';
import download from '../../../../utils/download';
import formatRows from './format/format-rows';
import useMarkupAction from './action/use-markup-action';
import { columnDefinitions, getTableHeader } from './get-table-header';
import { selectStateProperty } from '../../../../state/selector/general';

const GprofilerContainer = ({
  analysisID,
  data,
}) => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  const action = useMarkupAction(imageType);

  const [tableHeader, tableWidth] = useMemo(
    () => getTableHeader(imageType),
    [imageType],
  );

  const tableRows = useMemo(
    () => formatRows(data.results, action),
    [action, data.results],
  );

  const handleExportCSV = () => {
    const header = columnDefinitions.header.map((column) => column.name);
    const csv = convertToCsv(header, columnDefinitions.order, data.results, '\t');
    download(csv, `${analysisID}.txt`);
  };

  return (
    <Gprofiler
      handleExportCSV={handleExportCSV}
      tableHeader={tableHeader}
      tableRows={tableRows}
      tableWidth={tableWidth}
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
