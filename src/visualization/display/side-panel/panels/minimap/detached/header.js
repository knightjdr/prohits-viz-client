import PropTypes from 'prop-types';
import React from 'react';
import {
  faAdjust,
  faArrowsAlt,
  faEye,
  faEyeSlash,
} from '@fortawesome/pro-duotone-svg-icons';
import { faPaperclip } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';

const Header = ({
  showMinimap,
  toggleAttached,
  toggleMinimap,
}) => (
  <div className="minimap__detached-header">
    <span className="minimap__detached-buttons_left">
      <span
        data-tooltip="Attach minimap"
        data-tooltip-position="bottom"
      >
        <Button
          icon={faPaperclip}
          onClick={toggleAttached}
          type="button"
        />
      </span>
      <span
        data-tooltip={showMinimap ? 'Hide minimap' : 'Show minimap'}
        data-tooltip-position="bottom"
      >
        <Button
          icon={showMinimap ? faEyeSlash : faEye}
          onClick={toggleMinimap}
          type="button"
        />
      </span>
      <span
        data-tooltip="Toggle opacity"
        data-tooltip-position="bottom"
      >
        <Button
          icon={faAdjust}
          type="button"
        />
      </span>
    </span>
    <span
      className="minimap__detached-buttons_right"
    >
      <Button
        icon={faArrowsAlt}
        type="button"
      />
    </span>
  </div>
);

Header.propTypes = {
  showMinimap: PropTypes.bool.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  toggleMinimap: PropTypes.func.isRequired,
};

export default Header;
