const sortByNumber = (a, b) => a.content - b.content;
const sortByString = (a, b) => (a.content).localeCompare(b.content);

const columnDefinitions = {
  header: [
    {
      name: 'Term',
      sort: sortByString,
      sortable: true,
      sortKey: 'term',
      width: '175px',
    },
    {
      name: 'ID',
      sortable: false,
      width: 'minmax(82px, 15%)',
    },
    {
      name: 'Source',
      sort: sortByString,
      sortable: true,
      sortKey: 'source',
      width: 'minmax(73px, 10%)',
    },
    {
      name: 'T',
      sort: sortByNumber,
      sortable: true,
      sortKey: 'termSize',
      tooltip: 'Term size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'Q',
      sort: sortByNumber,
      sortable: true,
      sortKey: 'querySize',
      tooltip: 'Query size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'I',
      sort: sortByNumber,
      sortable: true,
      sortKey: 'intersectionSize',
      tooltip: 'Intersection Q ∩ T',
      width: 'minmax(63px, 10%)',
    },
    {
      name: 'p-value',
      sort: (a, b) => Number.parseFloat(a.content) - Number.parseFloat(b.content),
      sortable: true,
      sortKey: 'pValue',
      width: 'minmax(76px, 15%)',
    },
    {
      name: 'Genes',
      sortable: false,
      width: ' minmax(186px, 1fr)',
    },
  ],
  order: ['term', 'id', 'source', 'termSize', 'querySize', 'intersectionSize', 'pValue', 'genes'],
};

export default columnDefinitions;
