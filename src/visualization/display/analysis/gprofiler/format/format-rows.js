import createSourceLink from './create-source-link';

const formatRows = results => (
  results.map(term => ({
    genes: {
      canOverflow: true,
      content: term.genes,
    },
    id: {
      content: createSourceLink(term.id, term.source),
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
    source: {
      content: term.source,
    },
    term: {
      canOverflow: true,
      content: term.term,
    },
    termSize: {
      content: term.termSize,
    },
  }))
);

export default formatRows;
