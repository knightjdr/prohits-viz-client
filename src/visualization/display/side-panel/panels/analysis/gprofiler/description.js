import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../../../../../components/link/text/link';

const Description = () => (
  <p>
    <FontAwesomeIcon icon={faInfoCircle} />
    {' '}
    <span>
      Gene Ontology (GO) analysis is performed using
      {' '}
      <Link
        href="https://biit.cs.ut.ee/gprofiler"
        rel="noopener noreferrer"
        target="_blank"
      >
        g:Profiler
      </Link>
      .
      {' '}
      Please see their help for descriptions of the options below.
    </span>
  </p>
);

export default Description;
