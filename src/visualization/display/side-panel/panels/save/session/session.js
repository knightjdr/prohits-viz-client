import PropTypes from 'prop-types';
import React from 'react';
import { faFile, faBrowser } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Input from '../../../../../../components/input/text/input-text-container';
import Section from '../../section/section';

import './session.css';

const Session = ({
  handleChangeSessionName,
  handleSaveToBrowser,
  handleSaveToFile,
  sessionName,
}) => (
  <Section
    title="Save session"
  >
    <div className="panel__save-session">
      <Input
        label="Session name"
        onChange={handleChangeSessionName}
        placeholder="Name..."
        value={sessionName}
      />
      <div className="panel__save-session-grid">
        <span>Save to file:</span>
        <IconButton
          icon={faFile}
          kind="secondary"
          onClick={handleSaveToFile}
        />
        <span>Save to browser:</span>
        <IconButton
          icon={faBrowser}
          kind="secondary"
          onClick={handleSaveToBrowser}
        />
      </div>
    </div>
  </Section>
);

Session.propTypes = {
  handleChangeSessionName: PropTypes.func.isRequired,
  handleSaveToBrowser: PropTypes.func.isRequired,
  handleSaveToFile: PropTypes.func.isRequired,
  sessionName: PropTypes.string.isRequired,
};

export default Session;
