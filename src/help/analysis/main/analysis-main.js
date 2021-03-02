import React from 'react';

import Link from '../../../components/link/text/link';

const Analysis = () => (
  <div>
    <p>
      Initial analysis at ProHits-viz consists of extracting data from a tabular input
      file and processing/converting it into the required visualization type. While we
      provide explicit support for the output from several analysis tools, we provide
      implicit support for any file in tabular tab-separated format.
    </p>
    <p>
      With a properly formatted input file, simply select the desired analysis tool,
      specify the columns to use from the file and hit submit. There are a variety of
      advanced options than can be customized for each tool. Details about these options
      can be found be clicking on the help icon on the right hand side of the field in question.
    </p>
    <p>
      Analysis tasks will be kept for 24 hours. Previously run tasks can be accessed by
      navigating to the
      {' '}
      <Link
        to="/tasks"
        visited={false}
      >
        Tasks
      </Link>
      {' '}
      link in the navigation bar (note: this link will only be visible when you have available
      tasks). A folder with static result files can be downloaded for tasks when complete
      or interactive images can be viewed by selecting the desired image type. Interactive
      image files will also be generated
      in the static results&apos; folder to allow users to interactively view their results at a
      later date without having to rerun the analysis.
    </p>
    <p>
      To begin your analysis, go to
      {' '}
      <Link
        to="/analysis"
        visited={false}
      >
        Analysis
      </Link>
      .
    </p>
  </div>
);

export default Analysis;
