import PropTypes from 'prop-types';
import React from 'react';
import { faFile } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import Section from '../../section/section';

import './session.css';

const Session = ({
  handleSaveToFile,
}) => (
  <Section
    title="Save session"
  >
    <div className="panel__save-session-grid">
      <span>Save to file:</span>
      <IconButton
        icon={faFile}
        kind="secondary"
        onClick={handleSaveToFile}
      />
    </div>
  </Section>
);

Session.propTypes = {
  handleSaveToFile: PropTypes.func.isRequired,
};

export default Session;
