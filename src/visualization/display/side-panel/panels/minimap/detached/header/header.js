import PropTypes from 'prop-types';
import React from 'react';
import {
  faArrowsAlt,
  faEye,
  faEyeSlash,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/pro-duotone-svg-icons';
import { faPaperclip } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../../components/buttons/icon/button';

import './header.css';

const Header = ({
  handleMouseDown,
  opaque,
  toggleAttached,
  toggleOpacity,
  toggleVisibility,
  visibility,
}) => (
  <div
    className={`minimap__detached-header ${visibility ? 'minimap__detached-header_border' : 'minimap__detached-header_no-border'}`}
  >
    <span className="minimap__detached-header-buttons_left">
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
        data-tooltip={visibility ? 'Hide minimap' : 'Show minimap'}
        data-tooltip-position="bottom"
      >
        <Button
          icon={visibility ? faEyeSlash : faEye}
          onClick={toggleVisibility}
          type="button"
        />
      </span>
      <span
        data-tooltip="Toggle opacity"
        data-tooltip-position="bottom"
      >
        <Button
          icon={opaque ? faToggleOn : faToggleOff}
          onClick={toggleOpacity}
          type="button"
        />
      </span>
    </span>
    <span
      className="minimap__detached-header-buttons_right"
    >
      <Button
        onMouseDown={handleMouseDown}
        icon={faArrowsAlt}
        type="button"
      />
    </span>
  </div>
);

Header.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  opaque: PropTypes.bool.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  toggleOpacity: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};

export default Header;
