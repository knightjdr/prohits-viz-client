import * as sort from '../../../../utils/sort-table-content';

const columnDefinitions = {
  header: [
    {
      name: 'Term',
      sort: sort.sortByString,
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
      sort: sort.sortByString,
      sortable: true,
      sortKey: 'source',
      width: 'minmax(73px, 10%)',
    },
    {
      name: 'T',
      sort: sort.sortByNumber,
      sortable: true,
      sortKey: 'termSize',
      tooltip: 'Term size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'Q',
      sort: sort.sortByNumber,
      sortable: true,
      sortKey: 'querySize',
      tooltip: 'Query size',
      width: 'minmax(60px, 10%)',
    },
    {
      name: 'I',
      sort: sort.sortByNumber,
      sortable: true,
      sortKey: 'intersectionSize',
      tooltip: 'Intersection Q ∩ T',
      width: 'minmax(63px, 10%)',
    },
    {
      name: 'p-value',
      sort: sort.sortBySciNotation,
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
