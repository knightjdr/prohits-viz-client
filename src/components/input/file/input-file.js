import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faPaperclip } from '@fortawesome/pro-duotone-svg-icons';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import StyledInputFile, { Label } from './input-file-style';
import Warning from '../warning/warning';

const InputFile = ({
  files,
  handleChange,
  inputID,
  removeFile,
  warning,
  ...props
}) => (
  <StyledInputFile className="file-input">
    <input
      id={inputID}
      onChange={handleChange}
      type="file"
      {...props}
    />
    <Label
      htmlFor={inputID}
      kind="primary"
      shadow
      type="button"
    >
      <FontAwesomeIcon icon={faFileUpload} />
      <span>Select file</span>
    </Label>
    <Warning warning={warning} />
    {
      files.length > 0
      && (
        <ul className="file-input__list">
          {
            files.map((file) => (
              <li
                key={file.name}
              >
                <FontAwesomeIcon icon={faPaperclip} />
                <span>
                  {file.name}
                </span>
                <button
                  data-name={file.name}
                  onClick={removeFile}
                  type="button"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </li>
            ))
          }
        </ul>
      )
    }
  </StyledInputFile>
);

InputFile.defaultProps = {
  warning: '',
};

InputFile.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  removeFile: PropTypes.func.isRequired,
  warning: PropTypes.string,
};

export default InputFile;
