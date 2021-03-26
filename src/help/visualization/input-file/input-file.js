import React from 'react';

import Link from '../../../components/link/text/link';

const InputFile = () => (
  <div>
    <h2>Input file</h2>
    <p>
      Input files for the interactive viewers should be in JSON (.json) format. If you have previously
      run analysis and downloaded the results folder, you will find files compatible with this viewer
      there. These files are also generated by the interactive viewer when you save a session.
    </p>
    <p>
      Tabular text files for analysis are not compatible with the interactive viewers. They should first
      be processed with one of the
      {' '}
      <Link
        to="/help/analysis"
        visited={false}
      >
        analysis tools
      </Link>
      .
    </p>
  </div>
);

export default InputFile;
