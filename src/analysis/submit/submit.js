import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSpinner } from '@fortawesome/pro-solid-svg-icons';

import Button from '../../components/buttons/rectangular/button';
import Divider from '../../components/divider/divider';
import Error from './error';
import Settings from './settings';

import './submit.css';

const Submit = ({
  hasError,
  reset,
  settings,
  showAdvanced,
  submit,
  toggleAdvanced,
  uploading,
  uploadProgress,
}) => (
  <div className="analysis__submit">
    <Divider>Submit</Divider>
    <p>
      Hit the submit button when ready or customize advanced options.
    </p>
    <Error show={hasError} />
    <div className="analysis__submit-finalization">
      <Settings settings={settings} />
      <div className="analysis__submit-buttons">
        <Button
          disabled={uploading}
          kind="success"
          onClick={submit}
          type="button"
        >
          Submit
        </Button>
        <Button
          kind="warning"
          onClick={reset}
          type="button"
        >
          Reset
        </Button>
        <Button
          onClick={toggleAdvanced}
          type="button"
        >
          <FontAwesomeIcon icon={showAdvanced ? faMinus : faPlus} />
          Options
        </Button>
      </div>
      {
        uploading
        && (
          <div className="analysis__submit-progress">
            <FontAwesomeIcon icon={faSpinner} spin />
            Uploading
            {' '}
            {uploadProgress}
            %
          </div>
        )
      }
    </div>
  </div>
);

Submit.defaultProps = {
  uploadProgress: 0,
};

Submit.propTypes = {
  hasError: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.node,
    }),
  ).isRequired,
  showAdvanced: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  uploadProgress: PropTypes.number,
};

export default Submit;
