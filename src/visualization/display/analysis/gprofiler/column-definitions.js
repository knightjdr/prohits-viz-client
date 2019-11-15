const columnDefinitions = {
  header: [
    {
      name: 'Term',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'ID',
      sortable: false,
    },
    {
      name: 'Source',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'Term size',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'Query size',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'Matched',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'p-value',
      sortable: true,
      sortDir: null,
    },
    {
      name: 'Genes',
    },
  ],
  order: ['term', 'id', 'source', 'termSize', 'querySize', 'intersectionSize', 'pValue', 'genes'],
};

export default columnDefinitions;
