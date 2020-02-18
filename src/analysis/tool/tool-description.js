import React from 'react';

import Link from '../../components/link/text/link';

const toolDescription = (tool) => {
  switch (tool) {
    case 'correlation':
      return (
        <p>
          Correlation information for readouts across conditions is visualized as a heat map. This
          analysis is suitable for large datasets (typically &ge; 20 conditions) and can more easily
          display readout relationships in such circumstances than a dot plot. See the
          {' '}
          <Link
            href="/help"
            visited={false}
          >
            help
          </Link>
          {' '}
          for more information on this tool.
        </p>
      );
    case 'dotplot':
      return (
        <p>
          Quantitative information from condition-readout datasets is visualized as a dot plot. This
          is an ideal way of visualizing and familiarizing yourself with small to moderately sized
          data sets (&le; 20 conditions). See the
          {' '}
          <Link
            href="/help"
            visited={false}
          >
            help
          </Link>
          {' '}
          for more information on this tool.
        </p>
      );
    default:
      return null;
  }
};

export default toolDescription;
