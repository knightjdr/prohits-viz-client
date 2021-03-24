import PropTypes from 'prop-types';
import React from 'react';

import ButtonRectangular from '../../../../../../components/buttons/rectangular/button';
import Section from '../../section/section';

import './session.css';

const Session = ({
  handleSaveToFile,
}) => (
  <Section
    helpLink="/help/visualization/heatmap#save-session"
    title="Save session"
  >
    <div className="panel__save-session">
      <p>
        Save the entire session to a file, including settings and analysis.
      </p>
      <ButtonRectangular
        onClick={handleSaveToFile}
        kind="secondary"
      >
        Save
      </ButtonRectangular>
    </div>
  </Section>
);

Session.propTypes = {
  handleSaveToFile: PropTypes.func.isRequired,
};

export default Session;
