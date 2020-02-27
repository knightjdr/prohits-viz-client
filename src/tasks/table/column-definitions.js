import * as sort from '../../utils/sort-table-content';

const columnDefinitions = {
  header: [
    {
      name: 'Date',
      sort: sort.date,
      sortable: true,
      sortKey: 'date',
      width: '200px',
    },
    {
      name: 'ID',
      sortable: false,
      width: 'minmax(100px, 25%)',
    },
    {
      name: 'Tool',
      sort: sort.character,
      sortable: true,
      sortKey: 'tool',
      width: 'minmax(100px, 20%)',
    },
    {
      name: 'Status',
      sort: sort.character,
      sortable: true,
      sortKey: 'status',
      width: 'minmax(100px, 20%)',
    },
    {
      name: 'Files',
      sortable: false,
      width: 'minmax(150px, 35%)',
    },
  ],
  order: ['date', 'id', 'tool', 'status', 'files'],
};

export default columnDefinitions;
