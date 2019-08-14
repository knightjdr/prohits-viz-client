import PropTypes from 'prop-types';
import React from 'react';
import { faReply, faSync } from '@fortawesome/pro-duotone-svg-icons';
import { faPaperclip } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';

import './title.css';

const Title = ({
  attached,
  toggleAttached,
}) => (
  <div className="panel__minimap-title">
    <span
      className="panel__minimap-title-button panel__minimap-title-button-attach"
      data-tooltip={attached ? 'Detach minimap' : 'Attach minimap'}
      data-tooltip-position="right"
    >
      <Button
        icon={attached ? faReply : faPaperclip}
        onClick={toggleAttached}
        type="button"
      />
    </span>
    <h1 className="panel__section-title">Mini map</h1>
    <span
      className="panel__minimap-title-button panel__minimap-title-button-sync"
      data-tooltip="Resync minimap"
      data-tooltip-position="left"
    >
      <Button
        icon={faSync}
        type="button"
      />
    </span>
  </div>
);

Title.propTypes = {
  attached: PropTypes.bool.isRequired,
  toggleAttached: PropTypes.func.isRequired,
};

export default Title;
