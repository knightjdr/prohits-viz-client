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
      width: 'minmax(125px, 25%)',
    },
    {
      name: 'Tool',
      sort: sort.character,
      sortable: true,
      sortKey: 'tool',
      width: 'minmax(125px, 15%)',
    },
    {
      name: 'Status',
      sort: sort.innerText,
      sortable: true,
      sortKey: 'status',
      width: 'minmax(125px, 15%)',
    },
    {
      name: 'Files',
      sortable: false,
      width: 'minmax(275px, 45%)',
    },
  ],
  order: ['date', 'id', 'tool', 'status', 'files'],
};

export default columnDefinitions;
