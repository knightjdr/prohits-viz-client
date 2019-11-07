const defineNewOrderForSelection = (poi, unselected) => (
  poi.length > 0 ? poi : unselected
);

export default defineNewOrderForSelection;
