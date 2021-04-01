import React from 'react';
import { faPlus } from '@fortawesome/pro-solid-svg-icons';
import { nanoid } from 'nanoid';

import Button from '../../../../../components/buttons/icon/button';

import createSourceLink from './create-source-link';

const formatRows = (results, action) => (
  results.map((term) => ({
    action: {
      content: (
        <Button
          icon={faPlus}
          onClick={action}
        />
      ),
    },
    genes: {
      align: 'left',
      content: term.genes,
      showOverflow: true,
    },
    id: {
      content: createSourceLink(term.id, term.sourceURL),
    },
    intersectionSize: {
      content: term.intersectionSize,
    },
    querySize: {
      content: term.querySize,
    },
    pValue: {
      content: term.pValue,
    },
    rowID: nanoid(),
    source: {
      content: term.source,
    },
    term: {
      align: 'left',
      content: term.term,
      showOverflow: true,
    },
    termSize: {
      content: term.termSize,
    },
  }))
);

export default formatRows;
