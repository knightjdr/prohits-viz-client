import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FileParameters from './file-parameters';

import checkColumnValues from './check-column-values';
import useColumns from './use-columns';
import { selectState, selectStateProperty } from '../../state/selector/general';
import { setFormField, setFormFields } from '../../state/analysis/form-actions';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved, import/order
import Worker from 'worker-loader?filename=dist.read-conditions.worker.js!./read-conditions';
import createWorker from './create-worker';

const worker = createWorker(Worker);

const fields = ['abundance', 'condition', 'readout', 'score'];

const ColumnsContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const [conditions, setConditions] = useState({ loading: false, options: [] });
  const columns = useColumns(fields);
  const form = useSelector((state) => selectState(state, 'form'));
  const selectedTool = useSelector((state) => selectStateProperty(state, 'form', 'tool'));

  const setColumn = (e, id, value) => {
    if (value) {
      dispatch(setFormField(id, value));
    }
  };

  useEffect(() => {
    const result = checkColumnValues(columns, form, fields);
    if (result.shouldUpdate) {
      dispatch(setFormFields(result.updated));
    }
  }, [columns, dispatch, form]);

  useEffect(() => {
    const getConditions = async () => {
      if (selectedTool === 'condition-condition' && form.condition) {
        setConditions({ ...conditions, loading: true });
        const options = await worker(form.condition, form.files);
        setConditions({ loading: false, options });
      }
    };
    getConditions();
  }, [form.condition, form.files, selectedTool]);

  return (
    <FileParameters
      conditions={conditions}
      errors={errors}
      form={form}
      options={{
        abundance: columns.abundance.options,
        condition: columns.condition.options,
        readout: columns.readout.options,
        score: columns.score.options,
      }}
      selectedTool={selectedTool}
      setColumn={setColumn}
    />
  );
};

ColumnsContainer.propTypes = {
  errors: PropTypes.shape({
    abundance: PropTypes.string,
    condition: PropTypes.string,
    readout: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
};

const ShowWrapper = ({
  show,
  ...props
}) => (
  show && <ColumnsContainer {...props} />
);

ShowWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowWrapper;
