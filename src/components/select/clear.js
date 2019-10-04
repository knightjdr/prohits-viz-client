import PropTypes from 'prop-types';
import React from 'react';
import { faTimes } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../buttons/icon/button';

const Clear = ({
  canClear,
  clearOption,
  value,
}) => (
  <span className="select__clear">
    {
      canClear
      && value
        ? (
          <Button
            icon={faTimes}
            kind="transparent"
            onClick={clearOption}
            type="button"
          />
        )
        : null
    }
  </span>
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
