import PropTypes from 'prop-types';
import React from 'react';
import { faExpandAlt, faRedoAlt } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../../../components/buttons/icon/button';
import Section from '../../section/section';

import './reset.css';

const Reset = ({
  handleReset,
  handleTransformationReset,
  resetText,
}) => (
  <>
    <Section title="Reset">
      <div className="settings__reset">
        <span>
          {resetText}
          :
        </span>
        <Button
          icon={faRedoAlt}
          kind="warning"
          onClick={handleReset}
        />
        {
          handleTransformationReset
          && (
            <>
              <span>Reset scale and zoom:</span>
              <Button
                icon={faExpandAlt}
                kind="warning"
                onClick={handleTransformationReset}
              />
            </>
          )
        }
      </div>
    </Section>
  </>
);

Reset.defaultProps = {
  handleTransformationReset: null,
  resetText: 'Reset image and settings',
};

Reset.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleTransformationReset: PropTypes.func,
  resetText: PropTypes.string,
};

export default Reset;
