import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';

import Link from '../../../../../../components/link/text/link';
import Organism from './organism';

const Analysis = ({
  form,
  handleSpeciesChange,
}) => (
  <div>
    <p>
      <FontAwesomeIcon icon={faInfoCircle} />
      {' '}
      <span>
        Gene Ontology (GO) analysis is performed using
        {' '}
        <Link
          href="https://biit.cs.ut.ee/gprofiler/"
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
    <Organism
      handleChange={handleSpeciesChange}
      organism={form.organism}
    />
  </div>
);

Analysis.propTypes = {
  form: PropTypes.shape({
    organism: PropTypes.string.isRequired,
  }).isRequired,
  handleSpeciesChange: PropTypes.func.isRequired,
};

export default Analysis;
