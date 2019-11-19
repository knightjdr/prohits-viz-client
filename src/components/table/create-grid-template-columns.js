const getCellWidth = column => (
  column.width || 'auto'
);

const createGridColumnTemplate = columns => (
  columns.map(column => getCellWidth(column)).join(' ')
);

export default createGridColumnTemplate;
