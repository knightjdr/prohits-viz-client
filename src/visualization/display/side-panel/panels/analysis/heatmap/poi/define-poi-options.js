const createOptions = (names, indices) => (
  indices.map(index => ({
    index,
    name: names[index],
  }))
);

const definePoiOptions = (names, order, poi) => {
  const unselected = order.filter(item => !poi.includes(item));
  return {
    unselected: createOptions(names, unselected),
    unselectedOrder: unselected,
    poi: createOptions(names, poi),
  };
};

export default definePoiOptions;
