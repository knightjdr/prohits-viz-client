import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReadoutLength from './readout-length';

import checkColumnValues from '../../../file-parameters/check-column-values';
import useColumns from '../../../file-parameters/use-columns';
import { selectState } from '../../../../state/selector/general';
import { setFormField, setFormFields } from '../../../../state/analysis/form-actions';

const fields = ['readoutLength'];

const ReadoutLengthContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const columns = useColumns(fields);

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  useEffect(() => {
    const result = checkColumnValues(columns, form, fields);
    if (result.shouldUpdate) {
      dispatch(setFormFields(result.updated));
    }
  }, [columns, dispatch, form]);

  useEffect(() => {
    if (!form.readoutLength && form.readoutLengthNorm) {
      dispatch(setFormField('readoutLengthNorm', false));
    }
  }, [dispatch, form]);

  return (
    <ReadoutLength
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
      options={columns.readoutLength.options}
    />
  );
};

ReadoutLengthContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default ReadoutLengthContainer;
