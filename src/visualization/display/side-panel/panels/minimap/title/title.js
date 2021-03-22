import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faSync, faUnlink } from '@fortawesome/pro-duotone-svg-icons';
import { faQuestion } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';
import Link from '../../../../../../components/link/text/link';

import './title.css';

const Title = ({
  attached,
  toggleAttached,
  updateMinimap,
}) => (
  <div className="panel__minimap-title">
    <span
      className="panel__minimap-title-button panel__minimap-title-button-attach"
      data-tooltip={attached ? 'Detach minimap' : 'Attach minimap'}
      data-tooltip-position="right"
    >
      <Button
        icon={attached ? faUnlink : faLink}
        onClick={toggleAttached}
        type="button"
      />
    </span>
    <h1 className="panel__section-title">Mini map</h1>
    <div className="panel__minimap-title-button panel__minimap-title-buttons-right">
      <span
        data-tooltip="Resync minimap"
        data-tooltip-position="left"
      >
        <Button
          icon={faSync}
          onClick={updateMinimap}
          type="button"
        />
      </span>
      <Link
        to="/help/visualization/heatmap#minimap"
        visited={false}
      >
        <FontAwesomeIcon icon={faQuestion} />
      </Link>
    </div>
  </div>
);

Title.propTypes = {
  attached: PropTypes.bool.isRequired,
  toggleAttached: PropTypes.func.isRequired,
  updateMinimap: PropTypes.func.isRequired,
};

export default Title;
