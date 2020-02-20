import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';

import Divider from '../../components/divider/divider';
import Link from '../../components/link/text/link';
import Select from '../../components/select/select-container';

import toolDescription from './tool-description';

import './tool.css';

const Tool = ({
  errors,
  selectedtool,
  setTool,
}) => (
  <div className="analysis__tool">
    <Divider>Analysis Tool</Divider>
    <p>
      Select the tool you would like to use for your analysis. A detailed description of the tools can be in the
      {' '}
      <Link
        href="/help"
        visited={false}
      >
        help
      </Link>
      .
    </p>
    <div className="analysis__tool-select">
      <Select
        id="tool"
        onChange={setTool}
        options={[
          { label: 'Dot plot', value: 'dotplot' },
          { label: 'Correlation', value: 'correlation' },
        ]}
        placeholder="Select tool..."
        value={selectedtool}
        warning={errors.tool}
      />
      {
        selectedtool
        && (
          <div className="analysis__tool-description">
            <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            {toolDescription(selectedtool)}
          </div>
        )
      }
    </div>
  </div>
);

Tool.defaultProps = {
  selectedtool: '',
};

Tool.propTypes = {
  errors: PropTypes.shape({
    tool: PropTypes.string,
  }).isRequired,
  selectedtool: PropTypes.string,
  setTool: PropTypes.func.isRequired,
};

export default Tool;
