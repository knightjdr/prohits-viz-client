import React from 'react';

import CIHR from './assets/cihr.svg';
import ComputeCanada from './assets/compute-canada.png';
import GenomeCanada from './assets/genome-canada.svg';
import Link from '../../components/link/text/link';
import LTRI from './assets/ltri.svg';
import OntarioGenomics from './assets/ontario-genomics.svg';

import './footer.css';

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

const Footer = () => {
  const fundingLinks = fundingDetails.map(agency => (
    <Link
      className="footer__funding-link"
      href={agency.url}
      key={agency.name}
    >
      <img
        alt={agency.name}
        src={agency.image}
        height="50px"
      />
    </Link>
  ));
  return (
    <footer className="footer">
      <div className="footer__funding">
        <p>
          Funding for this project was graciously provided by:
        </p>
        <div className="footer__funding-links">
          { fundingLinks }
        </div>
      </div>
      <small>
        &copy; 2019,
        <Link
          href="http://gingraslab.lunenfeld.ca/"
          outline={false}
        >
          Gingras lab
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
