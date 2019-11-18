import nanoid from 'nanoid';

import createSourceLink from './create-source-link';

const formatRows = results => (
  results.map(term => ({
    genes: {
      align: 'left',
      canOverflow: true,
      content: term.genes,
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
      canOverflow: true,
      content: term.term,
    },
    termSize: {
      content: term.termSize,
    },
  }))
);

export default formatRows;
