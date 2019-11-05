import PropTypes from 'prop-types';
import React from 'react';
import { faTimes } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../buttons/icon/button';

const Clear = ({
  canClear,
  clearOption,
  value,
}) => (
  canClear
  && value
    ? (
      <span className="select__clear">
        <Button
          icon={faTimes}
          kind="transparent"
          onClick={clearOption}
          type="button"
        />
      </span>
    )
    : null
);

Clear.defaultProps = {
  value: '',
};

Clear.propTypes = {
  canClear: PropTypes.bool.isRequired,
  clearOption: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Clear;
