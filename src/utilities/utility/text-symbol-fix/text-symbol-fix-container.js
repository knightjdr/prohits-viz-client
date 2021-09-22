import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextSymbolFix, { defaultFieldValues } from './text-symbol-fix';

import useOnMount from '../../../hooks/on-mount/use-on-mount';
import { selectStateProperty } from '../../../state/selector/general';
import { setUtilityField, setUtilityFields } from '../../../state/utilities/utilities-actions';
import splitStringByCommaAndWhiteSpace from '../../../utils/split-comma-white-space';

const TextSymbolFixContainer = ({
  errors,
}) => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => selectStateProperty(state, 'utilities', 'columns'));

  const handleUtilityField = (e, id, value) => {
    const newValue = splitStringByCommaAndWhiteSpace(value, false);
    dispatch(setUtilityField(id, newValue));
  };

  useOnMount(() => {
    dispatch(setUtilityFields(defaultFieldValues));
  });

  return (
    <TextSymbolFix
      columns={columns}
      error={errors.columns}
      handleUtilityField={handleUtilityField}
    />
  );
};

TextSymbolFixContainer.propTypes = {
  errors: PropTypes.shape({
    columns: PropTypes.string,
  }).isRequired,
};

export default TextSymbolFixContainer;
