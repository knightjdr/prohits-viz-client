import React from 'react';

import Link from '../../../../../components/link/text/link';

const createSourceLink = (id, url) => (
  url
    ? (
      <Link
        to={url}
        outline={false}
        rel="noopener noreferrer"
        target="_blank"
      >
        { id }
      </Link>
      )
    : id
);

export default createSourceLink;
