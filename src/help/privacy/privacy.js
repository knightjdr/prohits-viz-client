import PropTypes from 'prop-types';
import React from 'react';

import './privacy.css';

const Privacy = ({
  canConsent,
  handleChange,
  haveConsent,
}) => (
  <div className="help__privacy">
    <h1>Privacy</h1>
    <p>
      We do not collect any personal information from our users.
    </p>
    <h2>Cookies</h2>
    <p>
      This sites uses Google Analytics to record usage statistics. We do this so that
      we are able to report accurate user numbers on grant proposals and progress reports.
      IP addressed are anonymized for this and no personal information is sent to Google.
      Google Analytics stores three cookies in your browser.
    </p>
    <p>
      To change your participation status, click the toggle below. Opting out will stop
      tracking your site usage and remove all cookies required by Google Analytics. This
      will apply to the current session and all subsequent visits from the current browser.
    </p>
    <div className="help__privacy-switch-container">
      <label
        className="help__privacy-switch"
        htmlFor="help__privacy-consent-switch"
      >
        <input
          checked={haveConsent}
          disabled={!canConsent}
          id="help__privacy-consent-switch"
          onChange={handleChange}
          type="checkbox"
        />
        <span
          aria-label="privacy consent"
          className="help__privacy-switch-slider"
        />
      </label>
      You are currently
      <strong className="help__privacy-status">
        {haveConsent ? 'opted in to' : 'opted out of'}
      </strong>
      usage tracking
      {
        !canConsent
        && ' and cannot opt in due to your browser configuration'
      }
    </div>
  </div>
);

Privacy.propTypes = {
  canConsent: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  haveConsent: PropTypes.bool.isRequired,
};

export default Privacy;
