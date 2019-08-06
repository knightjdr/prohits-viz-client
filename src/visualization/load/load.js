import PropTypes from 'prop-types';
import React from 'react';

import InputFile from '../../components/input/file/input-file-container';
import Link from '../../components/link/text/link';

import './load.css';

const Load = ({
  handleChange,
}) => (
  <div className="visualization__load">
    <InputFile onChange={handleChange} />
    <p>
      Select the interactive image to display. This file must be JSON format (extension .json).
      If you have downloaded an analysis results folder from ProHits-viz, these files will be
      located in the &quot;interactive&quot; subfolder. See the
      {' '}
      <Link
        href="/help/visualization/input-file"
        outline={false}
        visited={false}
      >
        help
      </Link>
      {' '}
      for information on the input format. You can also test a
      {' '}
      <Link
        href="/visualization/samplefile/dotplot"
        outline={false}
        visited={false}
      >
        sample file
      </Link>
      .
    </p>
  </div>
);

Load.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Load;
