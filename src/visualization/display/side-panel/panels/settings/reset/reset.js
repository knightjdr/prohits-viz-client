import PropTypes from 'prop-types';
import React from 'react';
import { faImage } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';
import Section from '../../section/section';

import './reset.css';

const Reset = ({
  handleImageReset,
}) => (
  <>
    <Section title="Reset">
      <div className="settings__reset">
        <span>Reset image and settings:</span>
        <Button
          icon={faImage}
          kind="warning"
          onClick={handleImageReset}
        />
      </div>
      <p className="settings__reset-description">
        Resetting the image will undo sorting and filtering, and
        restore settings to their defaults.
      </p>
    </Section>
  </>
);

Reset.propTypes = {
  handleImageReset: PropTypes.func.isRequired,
};

export default Reset;
