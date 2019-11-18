const createGridColumnTemplate = cells => (
  cells.map(cell => cell.width).join(' ')
);

export default createGridColumnTemplate;
