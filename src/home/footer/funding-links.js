import React from 'react';

import CIHR from './assets/cihr.svg';
import ComputeCanada from './assets/compute-canada.png';
import GenomeCanada from './assets/genome-canada.svg';
import Link from '../../components/link/text/link';
import LTRI from './assets/ltri.svg';
import OntarioGenomics from './assets/ontario-genomics.svg';

const fundingDetails = [
  {
    image: CIHR,
    name: 'CIHR',
    url: 'http://www.cihr-irsc.gc.ca',
  },
  {
    image: ComputeCanada,
    name: 'Compute Canada',
    url: 'https://www.computecanada.ca',
  },
  {
    image: GenomeCanada,
    name: 'Genome Canada',
    url: 'https://www.genomecanada.ca',
  },
  {
    image: OntarioGenomics,
    name: 'Ontario Genomics',
    url: 'https://www.ontariogenomics.ca',
  },
  {
    image: LTRI,
    name: 'LTRI',
    url: 'http://www.lunenfeld.ca',
  },
];

const FundingLinks = () => (
  <>
    {
      fundingDetails.map((agency) => (
        <Link
          to={agency.url}
          key={agency.name}
          outline
        >
          <img
            alt={agency.name}
            src={agency.image}
            height="50px"
          />
        </Link>
      ))
    }
  </>
);

export default FundingLinks;
