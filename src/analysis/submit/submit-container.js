import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Submit from './submit';

import getSettings from './get-settings';
import { selectState } from '../../state/selector/general';
import { resetForm, setFormField } from '../../state/analysis/form-actions';

const SubmitContainer = ({
  errors,
  submit,
  uploading,
}) => {
  const dispatch = useDispatch();

  const form = useSelector((state) => selectState(state, 'form'));

  const settings = useMemo(() => getSettings(form), [form]);

  const toggleAdvanced = () => {
    dispatch(setFormField('showAdvanced', !form.showAdvanced));
  };

  const reset = () => {
    dispatch(resetForm());
  };

  return (
    <Submit
      hasError={Object.keys(errors).length > 0}
      reset={reset}
      settings={settings}
      showAdvanced={form.showAdvanced}
      submit={submit}
      toggleAdvanced={toggleAdvanced}
      uploading={uploading}
    />
  );
};

SubmitContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  submit: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
};

const ShowWrapper = ({
  show,
  ...props
}) => (
  show && <SubmitContainer {...props} />
);

ShowWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowWrapper;
