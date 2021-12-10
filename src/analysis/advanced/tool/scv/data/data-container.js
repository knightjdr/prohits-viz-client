import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Data from './data';

import defineKnownMetric from './define-known-metric';
import fetch from '../../../../../utils/fetch';
import useOnMount from '../../../../../hooks/on-mount/use-on-mount';
import { selectState } from '../../../../../state/selector/general';
import { setFormField } from '../../../../../state/analysis/form-actions';

const DataContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    loading: true,
    proteinTissues: [{ label: 'loading...', optGroup: true }],
    rnaTissues: [{ label: 'loading...', optGroup: true }],
  });

  const form = useSelector((state) => selectState(state, 'form'));

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  const selectFile = (e, id, selectedFiles) => {
    dispatch(setFormField(id, selectedFiles));
  };

  useOnMount(() => {
    const fetchData = async () => {
      const result = await Promise.all([
        fetch('/data/protein-tissues.json'),
        fetch('/data/rna-tissues.json'),
      ]);
      setData({
        loading: false,
        proteinTissues: [
          { label: 'cells', optGroup: true },
          ...result[0].data.cells.map((cell) => ({ label: cell, value: cell })),
          { label: 'tissues', optGroup: true },
          ...result[0].data.tissues.map((tissue) => ({ label: tissue, value: tissue })),
        ],
        rnaTissues: [
          { label: 'cells', optGroup: true },
          ...result[1].data.cells.map((cell) => ({ label: cell, value: cell })),
          { label: 'tissues', optGroup: true },
          ...result[1].data.tissues.map((tissue) => ({ label: tissue, value: tissue })),
        ],
      });
    };
    fetchData();
  });

  useOnMount(() => {
    const updatedMetric = defineKnownMetric(form.fileType, form.known);
    if (updatedMetric) {
      dispatch(setFormField('known', updatedMetric));
    }
  });

  return (
    <Data
      data={data}
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
      selectFile={selectFile}
    />
  );
};

DataContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default DataContainer;
