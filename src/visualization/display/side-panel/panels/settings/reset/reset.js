import PropTypes from 'prop-types';
import React from 'react';
import { faImage, faSlidersV } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';
import Section from '../../section/section';

import './reset.css';

const Reset = ({
  handleImageReset,
  handleSettingReset,
}) => (
  <>
    <Section title="Reset">
      <div className="settings__reset">
        <span>Reset image:</span>
        <Button
          icon={faImage}
          kind="warning"
          onClick={handleImageReset}
        />
        <span>Reset settings:</span>
        <Button
          icon={faSlidersV}
          kind="warning"
          onClick={handleSettingReset}
        />
      </div>
      <p className="settings__reset-description">
        Resetting the image will undo sorting and filtering, but leave
        other settings untouched.
      </p>
    </Section>
  </>
);

Reset.propTypes = {
  handleImageReset: PropTypes.func.isRequired,
  handleSettingReset: PropTypes.func.isRequired,
};

export default Reset;
