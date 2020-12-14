import PropTypes from 'prop-types';
import React from 'react';

const Settings = ({
  settings,
}) => (
  <>
    <h2 className="analysis__form-settings-header">Current settings:</h2>
    <ul className="analysis__form-settings-list">
      {
        settings.map((setting) => (
          <li key={setting.key}>
            {setting.text}
          </li>
        ))
      }
    </ul>
  </>
);

Settings.propTypes = {
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.node,
    }),
  ).isRequired,
};

export default Settings;
