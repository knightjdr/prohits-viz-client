import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Columns from './columns';

import checkColumnValues from './check-column-values';
import useColumns from './use-columns';
import { selectState } from '../../state/selector/general';
import { setFormField, setFormFields } from '../../state/analysis/form-actions';

const fields = ['abundance', 'condition', 'readout', 'score'];

const ColumnsContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const columns = useColumns(fields);

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

  return (
    <Columns
      errors={errors}
      form={form}
      options={{
        abundance: columns.abundance.options,
        condition: columns.condition.options,
        readout: columns.readout.options,
        score: columns.score.options,
      }}
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
