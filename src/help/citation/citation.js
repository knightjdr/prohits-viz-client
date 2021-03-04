import React from 'react';

import Link from '../../components/link/text/link';

const Citation = () => (
  <div>
    <h1>Citation</h1>
    <p>
      If you use ProHits-viz in your work, please cite our most recent publication:
    </p>
    <p>
      <cite>
        Knight JDR, Choi H, Gupta GD, Pelletier L, Raught B, Nesvizhskii AI, Gingras AC.
        ProHits-viz: a suite of web tools for visualizing interaction proteomics data. Nat
        Methods. 2017 Jun 29;14(7):645-646.
        {' '}
        <Link to="https://pubmed.ncbi.nlm.nih.gov/28661499">PMID: 28661499</Link>
        .
      </cite>
    </p>
    <h2>Previous publications</h2>
    <ul>
      <li>
        <cite>
          Knight JDR, Liu G, Zhang JP, Pasculescu A, Choi H, Gingras AC. A web-tool for
          visualizing quantitative protein-protein interaction data. Proteomics.
          2015 Apr;15(8):1432-6.
          {' '}
          <Link to="https://pubmed.ncbi.nlm.nih.gov/25422071">PMID: 25422071</Link>
          .
        </cite>
      </li>
    </ul>
  </div>
);

export default Citation;
