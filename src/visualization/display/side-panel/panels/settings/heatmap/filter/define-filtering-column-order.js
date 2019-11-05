const defineFilteringColumnOrder = (defaultOrder, filterColumnIndices) => (
  filterColumnIndices.length > 0 ? filterColumnIndices : defaultOrder
);

export default defineFilteringColumnOrder;
