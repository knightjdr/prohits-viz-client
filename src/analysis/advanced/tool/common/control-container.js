import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Control from './control';

import checkColumnValues from '../../../file-parameters/check-column-values';
import useColumns from '../../../file-parameters/use-columns';
import useOnMount from '../../../../hooks/on-mount/use-on-mount';
import { selectState } from '../../../../state/selector/general';
import { setFormField, setFormFields } from '../../../../state/analysis/form-actions';

const fields = ['control'];

const ControlContainer = ({
  errors,
  help,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const columns = useColumns(fields);

  const handleChange = (e, id, value) => {
    dispatch(setFormField(id, value));
  };

  useOnMount(() => {
    if (form.ctrlSub && !form.control) {
      dispatch(setFormField('ctrlSub', false));
    }
  });

  useEffect(() => {
    const result = checkColumnValues(columns, form, fields);
    if (result.shouldUpdate) {
      dispatch(setFormFields({
        ctrlSub: Boolean(result.updated.control),
        ...result.updated,
      }));
    }
  }, [columns, dispatch, form]);

  return (
    <Control
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
      options={columns.control.options}
    />
  );
};

ControlContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default ControlContainer;
